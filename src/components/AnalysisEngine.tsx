import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Scan, 
  Brain, 
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const AnalysisEngine = () => {
  const [inputText, setInputText] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock NLP analysis function
  const analyzeText = async (text: string) => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis results based on keywords
    const scamKeywords = [
      "digital arrest", "urgent payment", "account frozen", "verify otp", 
      "police complaint", "cybercrime", "immediate action", "arrest warrant",
      "legal notice", "court case", "pay fine", "money transfer"
    ];
    
    const urgencyWords = ["urgent", "immediate", "now", "asap", "quickly"];
    const threatWords = ["arrest", "police", "court", "legal", "jail", "prison"];
    const moneyWords = ["pay", "payment", "transfer", "money", "amount", "fine"];
    
    const foundKeywords = scamKeywords.filter(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );
    
    const urgencyScore = urgencyWords.filter(word => 
      text.toLowerCase().includes(word)
    ).length * 25;
    
    const threatScore = threatWords.filter(word => 
      text.toLowerCase().includes(word)
    ).length * 30;
    
    const moneyScore = moneyWords.filter(word => 
      text.toLowerCase().includes(word)
    ).length * 20;
    
    const baseScore = foundKeywords.length * 15;
    const totalScore = Math.min(baseScore + urgencyScore + threatScore + moneyScore, 100);
    
    const getRiskLevel = (score: number) => {
      if (score >= 80) return "CRITICAL";
      if (score >= 60) return "HIGH";
      if (score >= 30) return "MEDIUM";
      return "LOW";
    };
    
    const result = {
      riskScore: totalScore,
      riskLevel: getRiskLevel(totalScore),
      keywords: foundKeywords,
      sentiment: totalScore > 50 ? "threatening" : "neutral",
      recommendations: totalScore > 60 ? [
        "Do not respond to this message",
        "Block the sender immediately", 
        "Report to cybercrime authorities",
        "Never share OTP or banking details"
      ] : [
        "Exercise caution",
        "Verify sender through official channels"
      ],
      patterns: {
        urgency: urgencyScore > 0,
        threats: threatScore > 0,
        moneyRequests: moneyScore > 0
      }
    };
    
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  const handleAnalyze = () => {
    if (inputText.trim()) {
      analyzeText(inputText);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL": return "destructive";
      case "HIGH": return "warning";
      case "MEDIUM": return "secondary";
      default: return "success";
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold gradient-text">AI Analysis Engine</h2>
        <p className="text-muted-foreground">
          Paste suspicious messages, emails, or call transcripts below for real-time fraud analysis
        </p>
      </div>

      {/* Input Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-cyber-blue" />
            Text Analysis
          </CardTitle>
          <CardDescription>
            Enter the suspicious communication content for AI-powered fraud detection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Example: 'URGENT: Digital arrest warrant issued. Pay ₹50,000 immediately to avoid imprisonment. Call 9876543210 now!'"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-32 bg-background/50"
          />
          <Button 
            onClick={handleAnalyze}
            disabled={!inputText.trim() || isAnalyzing}
            variant="cyber"
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Analyzing...
              </>
            ) : (
              <>
                <Scan className="h-4 w-4" />
                Analyze Text
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-4">
          <Alert variant={getRiskColor(analysis.riskLevel) as any} className="animate-pulse-glow">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>
              Analysis Complete - Risk Level: {analysis.riskLevel}
            </AlertTitle>
            <AlertDescription>
              Fraud probability: {analysis.riskScore}%
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Risk Score</span>
                    <Badge variant={getRiskColor(analysis.riskLevel) as any}>
                      {analysis.riskScore}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sentiment</span>
                    <Badge variant={analysis.sentiment === "threatening" ? "destructive" : "secondary"}>
                      {analysis.sentiment}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Pattern Detection:</span>
                    <div className="flex flex-wrap gap-2">
                      {analysis.patterns.urgency && (
                        <Badge variant="warning" className="text-xs">Urgency</Badge>
                      )}
                      {analysis.patterns.threats && (
                        <Badge variant="destructive" className="text-xs">Threats</Badge>
                      )}
                      {analysis.patterns.moneyRequests && (
                        <Badge variant="secondary" className="text-xs">Money Request</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysis.recommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {analysis.keywords.length > 0 && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Detected Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analysis.keywords.map((keyword: string, idx: number) => (
                    <Badge key={idx} variant="destructive" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Sample Inputs */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Try Sample Fraud Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3">
            <Button 
              variant="ghost" 
              className="text-left h-auto p-3 justify-start"
              onClick={() => setInputText("URGENT: Digital arrest warrant issued against you. Pay ₹25,000 fine immediately to cybercrime@gov.in or face 7 years imprisonment. Call 9876543210 NOW!")}
            >
              <MessageSquare className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm text-left">Digital arrest SMS scam</span>
            </Button>
            <Button 
              variant="ghost" 
              className="text-left h-auto p-3 justify-start"
              onClick={() => setInputText("Dear Customer, Your bank account will be frozen in 2 hours due to suspicious activity. Verify your account by sharing OTP 123456 immediately.")}
            >
              <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm text-left">Banking fraud email</span>
            </Button>
            <Button 
              variant="ghost" 
              className="text-left h-auto p-3 justify-start"
              onClick={() => setInputText("Hello sir, I am calling from CBI office. We have received complaint against you. You need to transfer money to government account to avoid arrest.")}
            >
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm text-left">Fake authority call transcript</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisEngine;