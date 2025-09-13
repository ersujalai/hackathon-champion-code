import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Phone, 
  Mail, 
  MessageSquare,
  CreditCard,
  Lock,
  UserX,
  Lightbulb
} from "lucide-react";

const EducationHub = () => {
  const scamTactics = [
    {
      title: "Digital Arrest Scams",
      description: "Fraudsters impersonate law enforcement claiming you're under 'digital arrest'",
      icon: <Shield className="h-5 w-5" />,
      warning: "Police NEVER arrest people over phone calls or video calls",
      examples: [
        "Fake CBI/Police officers on video calls",
        "Threats of immediate arrest",
        "Demands for bail money transfer"
      ]
    },
    {
      title: "Voice Spoofing & Deepfakes",
      description: "AI-generated voices mimicking authorities or family members",
      icon: <Phone className="h-5 w-5" />,
      warning: "Verify identity through alternate channels before taking action",
      examples: [
        "Synthetic voices claiming emergencies",
        "Cloned voice of family members",
        "Fake government official recordings"
      ]
    },
    {
      title: "Phishing & Fake Documents",
      description: "Fraudulent emails and documents that appear official",
      icon: <Mail className="h-5 w-5" />,
      warning: "Always verify through official government websites",
      examples: [
        "Fake court notices via email",
        "Spoofed government email addresses",
        "Forged legal documents"
      ]
    },
    {
      title: "OTP & Banking Frauds",
      description: "Tricks to steal your banking credentials and OTPs",
      icon: <CreditCard className="h-5 w-5" />,
      warning: "NEVER share OTP, PIN, or banking details with anyone",
      examples: [
        "Account freezing threats",
        "Fake KYC update requests",
        "Emergency money transfer demands"
      ]
    }
  ];

  const protectionTips = [
    {
      tip: "Verify Authority Claims",
      description: "Call the official number of the organization directly",
      icon: <Eye className="h-5 w-5 text-cyber-blue" />
    },
    {
      tip: "Never Share OTP/PIN",
      description: "Legitimate organizations never ask for OTP over calls",
      icon: <Lock className="h-5 w-5 text-cyber-green" />
    },
    {
      tip: "Check Official Websites",
      description: "Verify notices and communications through official channels",
      icon: <Shield className="h-5 w-5 text-cyber-purple" />
    },
    {
      tip: "Trust Your Instincts",
      description: "If something feels urgent or threatening, it's likely a scam",
      icon: <AlertTriangle className="h-5 w-5 text-warning" />
    },
    {
      tip: "Report Suspicious Activity",
      description: "Report scams to cybercrime helpline 1930",
      icon: <UserX className="h-5 w-5 text-destructive" />
    },
    {
      tip: "Educate Family Members",
      description: "Share awareness with elderly and less tech-savvy relatives",
      icon: <Lightbulb className="h-5 w-5 text-cyber-orange" />
    }
  ];

  const redFlags = [
    "Urgent payment demands",
    "Threats of immediate arrest",
    "Requests for OTP/PIN",
    "Suspicious caller IDs",
    "Video calls from unknown officials",
    "Account freezing warnings",
    "Digital arrest warrants",
    "Emergency money transfers"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold gradient-text">Fraud Awareness Center</h2>
        <p className="text-muted-foreground">
          Learn about common scam tactics and how to protect yourself from digital fraud
        </p>
      </div>

      {/* Urgent Alert */}
      <Alert variant="cyber" className="animate-pulse-glow">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Remember:</strong> No legitimate authority will ever demand immediate payment over phone/video calls. 
          When in doubt, hang up and verify through official channels.
        </AlertDescription>
      </Alert>

      {/* Scam Tactics */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Common Scam Tactics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scamTactics.map((tactic, idx) => (
            <Card key={idx} className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {tactic.icon}
                  {tactic.title}
                </CardTitle>
                <CardDescription>{tactic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert variant="warning" className="mb-3">
                  <AlertDescription className="text-sm">
                    <strong>Key Warning:</strong> {tactic.warning}
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <span className="text-sm font-medium">Common Examples:</span>
                  <ul className="text-sm space-y-1">
                    {tactic.examples.map((example, exIdx) => (
                      <li key={exIdx} className="flex items-start gap-2">
                        <AlertTriangle className="h-3 w-3 text-warning mt-1 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Protection Tips */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Protection Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {protectionTips.map((tip, idx) => (
            <Card key={idx} className="glass-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  {tip.icon}
                  {tip.tip}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Red Flags */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Red Flags to Watch For
          </CardTitle>
          <CardDescription>
            These are warning signs that indicate a potential scam attempt
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {redFlags.map((flag, idx) => (
              <Badge key={idx} variant="destructive" className="text-xs p-2 text-center">
                {flag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-success" />
            Emergency Helplines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-border rounded-lg">
              <div className="text-2xl font-bold text-success">1930</div>
              <div className="text-sm text-muted-foreground">Cybercrime Helpline</div>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <div className="text-2xl font-bold text-cyber-blue">100</div>
              <div className="text-sm text-muted-foreground">Police Emergency</div>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <div className="text-2xl font-bold text-warning">112</div>
              <div className="text-sm text-muted-foreground">National Emergency</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationHub;