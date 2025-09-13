import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Phone, 
  Mail, 
  MessageSquare,
  Brain,
  Activity,
  Zap
} from "lucide-react";
import { useState } from "react";

const DetectionDashboard = () => {
  const [threats] = useState([
    {
      id: 1,
      type: "SMS",
      content: "URGENT: Digital arrest warrant issued. Pay ₹50,000 immediately to avoid imprisonment. Call 9876543210",
      riskLevel: "HIGH",
      confidence: 94,
      keywords: ["digital arrest", "urgent", "imprisonment", "pay immediately"],
      timestamp: "2 minutes ago",
      status: "blocked"
    },
    {
      id: 2,
      type: "EMAIL",
      content: "From: cybercrime@gov.in - Your account will be frozen unless you verify OTP: 123456",
      riskLevel: "CRITICAL",
      confidence: 98,
      keywords: ["cybercrime", "account frozen", "verify otp"],
      timestamp: "5 minutes ago",
      status: "blocked"
    },
    {
      id: 3,
      type: "CALL",
      content: "Voice analysis detected: Synthetic voice claiming to be from CBI with threats of arrest",
      riskLevel: "HIGH",
      confidence: 87,
      keywords: ["synthetic voice", "cbi", "arrest threats"],
      timestamp: "12 minutes ago",
      status: "flagged"
    }
  ]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL": return "destructive";
      case "HIGH": return "warning";
      case "MEDIUM": return "secondary";
      default: return "success";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "blocked": return "destructive";
      case "flagged": return "warning";
      default: return "success";
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Alerts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold gradient-text">Real-time Threat Detection</h2>
        
        {threats.map((threat) => (
          <Alert key={threat.id} variant={getRiskColor(threat.riskLevel) as any} className="animate-pulse-glow">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                {threat.type === "SMS" && <MessageSquare className="h-4 w-4" />}
                {threat.type === "EMAIL" && <Mail className="h-4 w-4" />}
                {threat.type === "CALL" && <Phone className="h-4 w-4" />}
                {threat.type} Threat Detected
              </span>
              <div className="flex items-center gap-2">
                <Badge variant={getStatusColor(threat.status) as any}>
                  {threat.status.toUpperCase()}
                </Badge>
                <Badge variant="outline">
                  {threat.confidence}% Confidence
                </Badge>
              </div>
            </AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p className="text-sm">{threat.content}</p>
                <div className="flex flex-wrap gap-1">
                  {threat.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs opacity-70">{threat.timestamp}</p>
              </div>
            </AlertDescription>
          </Alert>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyber-blue" />
              Threats Blocked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyber-blue">247</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Eye className="h-4 w-4 text-warning" />
              Active Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">1,342</div>
            <p className="text-xs text-muted-foreground">Communications analyzed</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Brain className="h-4 w-4 text-cyber-purple" />
              AI Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyber-purple">96.8%</div>
            <p className="text-xs text-muted-foreground">Detection rate</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4 text-success" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">99.9%</div>
            <p className="text-xs text-muted-foreground">Uptime</p>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button variant="cyber" className="animate-pulse-glow">
          <Zap className="h-4 w-4" />
          Start Scan
        </Button>
        <Button variant="glass">
          <Eye className="h-4 w-4" />
          View Full Report
        </Button>
        <Button variant="outline">
          <Brain className="h-4 w-4" />
          AI Settings
        </Button>
      </div>
    </div>
  );
};

export default DetectionDashboard;