import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Brain, 
  Eye, 
  MessageSquare, 
  GraduationCap, 
  FileText,
  Activity,
  Zap,
  AlertTriangle
} from "lucide-react";

import DetectionDashboard from "@/components/DetectionDashboard";
import AnalysisEngine from "@/components/AnalysisEngine";
import EducationHub from "@/components/EducationHub";
import ReportingCenter from "@/components/ReportingCenter";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">CyberGuard AI</h1>
                <p className="text-sm text-muted-foreground">Multi-Channel Fraud Detection System</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success" className="animate-pulse-glow">
                <Activity className="h-3 w-3 mr-1" />
                System Active
              </Badge>
              <Button variant="cyber" size="sm">
                <Zap className="h-4 w-4" />
                Quick Scan
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass-card">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Analysis
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="report" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Report
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DetectionDashboard />
          </TabsContent>

          <TabsContent value="analysis">
            <AnalysisEngine />
          </TabsContent>

          <TabsContent value="education">
            <EducationHub />
          </TabsContent>

          <TabsContent value="report">
            <ReportingCenter />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-md mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-cyber-blue" />
              <span className="text-sm text-muted-foreground">
                Protecting against digital arrest & fraud scams
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Emergency: 1930</span>
              <span>•</span>
              <span>Cybercrime Helpline</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;