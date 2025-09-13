import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Upload, 
  CheckCircle, 
  Clock,
  Shield,
  AlertTriangle
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ReportingCenter = () => {
  const [reportType, setReportType] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [submittedReports] = useState([
    {
      id: "RPT-001",
      type: "SMS",
      content: "Digital arrest scam message",
      status: "Under Review",
      timestamp: "2 hours ago"
    },
    {
      id: "RPT-002", 
      type: "CALL",
      content: "Fake CBI officer demanding money",
      status: "Verified Scam",
      timestamp: "1 day ago"
    },
    {
      id: "RPT-003",
      type: "EMAIL",
      content: "Phishing email claiming account freeze",
      status: "Processed",
      timestamp: "3 days ago"
    }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportType || !reportContent.trim()) return;

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setReportType("");
    setReportContent("");
    setContactInfo("");
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review": return "warning";
      case "Verified Scam": return "destructive";
      case "Processed": return "success";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold gradient-text">Report Suspicious Activity</h2>
        <p className="text-muted-foreground">
          Help us improve our detection system by reporting suspicious communications you receive
        </p>
      </div>

      {showSuccess && (
        <Alert variant="success" className="animate-pulse-glow">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            Thank you! Your report has been submitted successfully and will help improve our fraud detection system.
          </AlertDescription>
        </Alert>
      )}

      {/* Report Form */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-cyber-blue" />
            Submit New Report
          </CardTitle>
          <CardDescription>
            Provide details about suspicious messages, calls, or emails you've received
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reportType">Communication Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type of communication" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SMS">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      SMS/Text Message
                    </div>
                  </SelectItem>
                  <SelectItem value="CALL">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Call
                    </div>
                  </SelectItem>
                  <SelectItem value="EMAIL">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </div>
                  </SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Suspicious Content</Label>
              <Textarea
                id="content"
                placeholder="Paste the exact message, describe the call content, or provide email details..."
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
                className="min-h-32 bg-background/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Sender Contact Info (Optional)</Label>
              <Input
                id="contact"
                placeholder="Phone number, email address, or other contact details"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="bg-background/50"
              />
            </div>

            <Button 
              type="submit"
              disabled={!reportType || !reportContent.trim() || isSubmitting}
              variant="cyber"
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Submitting Report...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Submit Report
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Previous Reports */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Your Recent Reports</h3>
        <div className="space-y-3">
          {submittedReports.map((report) => (
            <Card key={report.id} className="glass-card">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {report.type === "SMS" && <MessageSquare className="h-4 w-4 text-cyber-blue" />}
                    {report.type === "CALL" && <Phone className="h-4 w-4 text-cyber-blue" />}
                    {report.type === "EMAIL" && <Mail className="h-4 w-4 text-cyber-blue" />}
                    <div>
                      <div className="font-medium">Report #{report.id}</div>
                      <div className="text-sm text-muted-foreground">{report.content}</div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={getStatusColor(report.status) as any}>
                      {report.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{report.timestamp}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Report Tips */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Reporting Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              Include exact text/content of suspicious communications
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              Provide sender information (phone numbers, email addresses)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              Report even if you didn't fall for the scam - it helps others
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              Screenshots or voice recordings can be very helpful
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportingCenter;