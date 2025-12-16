import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
  enrolled_beta: boolean;
}

const Admin = () => {
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchWaitlist = async () => {
    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch waitlist entries",
        variant: "destructive",
      });
    } else {
      setWaitlist(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  const toggleEnrollment = async (id: string, email: string, currentStatus: boolean) => {
    const newStatus = !currentStatus;
    
    const { error } = await supabase
      .from("waitlist")
      .update({ enrolled_beta: newStatus })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update enrollment status",
        variant: "destructive",
      });
      return;
    }

    // Send beta enrollment email when enrolling
    if (newStatus) {
      try {
        await supabase.functions.invoke('send-beta-invite', {
          body: {
            email,
            metadata: {},
          },
        });
        // await supabase.functions.invoke("send-waitlist-confirmation", {
          // body: { email, type: "beta_enrollment" },
        // });
        toast({
          title: "Success",
          description: "User enrolled in beta and invitation email sent",
        });
      } catch (emailError) {
        console.error("Failed to send enrollment email:", emailError);
        toast({
          title: "Enrolled",
          description: "User enrolled but email failed to send",
          variant: "destructive",
        });
      }
    } else {
      if (!currentStatus) send_invite(email);
      toast({
        title: "Success",
        description: "User removed from beta",
      });
    }

    fetchWaitlist();
  };

  const deleteEntry = async (id: string) => {
    const { error } = await supabase
      .from("waitlist")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete entry",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Entry deleted",
      });
      fetchWaitlist();
    }
  };

  const send_invite = async (email: string, name?: string) => {
    const { data, error } = await supabase.functions.invoke("send-beta-invite", {
      body: {
        email,
        metadata: { name },
      },
    });
    console.log(data);
    if (error) {
      toast({
        title: "Error",
        description: error.message ?? "Failed to send invite email",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: `User ${email} sent beta invite.`,
    });

  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle>Waitlist Management</CardTitle>
            <CardDescription>
              Manage beta signup invitations. Toggle enrollment to grant users access.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : waitlist.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No waitlist entries yet.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Sign Up Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {waitlist.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-medium">{entry.email}</TableCell>
                      <TableCell>
                        {new Date(entry.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant={entry.enrolled_beta ? "default" : "secondary"}>
                          {entry.enrolled_beta ? "Enrolled In Beta" : "Wait listed"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant={entry.enrolled_beta ? "outline" : "default"}
                            size="sm"
                            onClick={() => toggleEnrollment(entry.id, entry.email, entry.enrolled_beta)}
                          >
                            {entry.enrolled_beta ? (
                              <>
                                <X className="h-4 w-4 mr-1" />
                                Revoke
                              </>
                            ) : (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Invite
                              </>
                            )}
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteEntry(entry.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
