
import { useState } from "react";
import { Upload, Palette, Settings, Shield, Save, Eye, FileText, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [config, setConfig] = useState({
    primaryColor: "#F4B942",
    secondaryColor: "#1A1A1A",
    fontFamily: "Poppins",
    footerText: "Thank you for your business!",
    showFooter: true,
    showPdfDownload: true,
    autoIncludeDate: true,
    enableKanban: false,
    allowClientEmail: true
  });

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveConfig = () => {
    localStorage.setItem("invoiceConfig", JSON.stringify(config));
    alert("Configuration saved successfully!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-mustard-light flex items-center justify-center p-4 font-poppins">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-mustard/20">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-mustard mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-charcoal mb-2">Admin Dashboard</h1>
            <p className="text-charcoal/70">Enter password to access dashboard</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="password" className="text-charcoal font-medium">Admin Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 border-mustard/30 focus:border-mustard"
                placeholder="Enter admin password"
              />
            </div>
            <Button 
              onClick={handleLogin}
              className="w-full bg-charcoal text-mustard hover:bg-mustard hover:text-charcoal font-medium"
            >
              Unlock Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mustard-light p-4 sm:p-6 lg:p-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Admin <span className="text-mustard">Dashboard</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-6 rounded-full"></div>
          <p className="text-charcoal/70 text-lg">Manage your invoice templates and settings</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section 1: Invoice Template */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-mustard/20">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-mustard" />
              <h2 className="text-xl font-bold text-charcoal">Invoice Template</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-charcoal font-medium">Upload New Template</Label>
                <div className="mt-2">
                  <Button className="w-full bg-charcoal text-mustard hover:bg-mustard hover:text-charcoal">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Template
                  </Button>
                </div>
              </div>
              
              <div className="bg-mustard-light p-4 rounded-lg border border-mustard/20">
                <p className="text-charcoal/70 text-sm mb-2">Current Template Preview</p>
                <div className="bg-white h-24 rounded border border-mustard/30 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-charcoal/50" />
                </div>
              </div>
              
              <Button className="w-full bg-mustard text-charcoal hover:bg-charcoal hover:text-mustard">
                Set as Active Template
              </Button>
            </div>
          </div>

          {/* Section 2: Styling Controls */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-mustard/20">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="w-6 h-6 text-mustard" />
              <h2 className="text-xl font-bold text-charcoal">Invoice Styling</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-charcoal font-medium">Primary Color</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="color"
                    value={config.primaryColor}
                    onChange={(e) => handleConfigChange("primaryColor", e.target.value)}
                    className="w-12 h-10 rounded border border-mustard/30"
                  />
                  <Input
                    value={config.primaryColor}
                    onChange={(e) => handleConfigChange("primaryColor", e.target.value)}
                    className="border-mustard/30 focus:border-mustard"
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-charcoal font-medium">Secondary Color</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="color"
                    value={config.secondaryColor}
                    onChange={(e) => handleConfigChange("secondaryColor", e.target.value)}
                    className="w-12 h-10 rounded border border-mustard/30"
                  />
                  <Input
                    value={config.secondaryColor}
                    onChange={(e) => handleConfigChange("secondaryColor", e.target.value)}
                    className="border-mustard/30 focus:border-mustard"
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-charcoal font-medium">Font Family</Label>
                <select
                  value={config.fontFamily}
                  onChange={(e) => handleConfigChange("fontFamily", e.target.value)}
                  className="w-full mt-1 p-2 border border-mustard/30 rounded-md focus:border-mustard bg-white text-charcoal"
                >
                  <option value="Poppins">Poppins</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Inter">Inter</option>
                </select>
              </div>
              
              <div>
                <Label className="text-charcoal font-medium">Upload Logo</Label>
                <Button className="w-full mt-2 bg-charcoal text-mustard hover:bg-mustard hover:text-charcoal">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
          </div>

          {/* Section 3: Footer Editor */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-mustard/20">
            <div className="flex items-center space-x-3 mb-6">
              <QrCode className="w-6 h-6 text-mustard" />
              <h2 className="text-xl font-bold text-charcoal">Invoice Footer</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-charcoal font-medium">Custom Footer Text</Label>
                <textarea
                  value={config.footerText}
                  onChange={(e) => handleConfigChange("footerText", e.target.value)}
                  className="w-full mt-1 p-2 border border-mustard/30 rounded-md focus:border-mustard resize-none h-20"
                  placeholder="Enter custom footer text..."
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="showFooter"
                  checked={config.showFooter}
                  onChange={(e) => handleConfigChange("showFooter", e.target.checked)}
                  className="rounded border-mustard/30"
                />
                <Label htmlFor="showFooter" className="text-charcoal font-medium">Enable Footer</Label>
              </div>
              
              <div>
                <Label className="text-charcoal font-medium">Upload QR Code</Label>
                <Button className="w-full mt-2 bg-charcoal text-mustard hover:bg-mustard hover:text-charcoal">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload QR Code
                </Button>
              </div>
            </div>
          </div>

          {/* Section 4: Features */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-mustard/20">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="w-6 h-6 text-mustard" />
              <h2 className="text-xl font-bold text-charcoal">Invoice Features</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { key: "enableKanban", label: "Enable Kanban Columns" },
                { key: "showPdfDownload", label: "Show PDF Download" },
                { key: "autoIncludeDate", label: "Auto-Include Date" },
                { key: "allowClientEmail", label: "Allow Client Email" }
              ].map((feature) => (
                <div key={feature.key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={feature.key}
                    checked={config[feature.key as keyof typeof config] as boolean}
                    onChange={(e) => handleConfigChange(feature.key, e.target.checked)}
                    className="rounded border-mustard/30"
                  />
                  <Label htmlFor={feature.key} className="text-charcoal font-medium">
                    {feature.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Save Configuration */}
          <div className="md:col-span-2 lg:col-span-1 bg-white rounded-xl shadow-lg p-6 border border-mustard/20">
            <div className="flex items-center space-x-3 mb-6">
              <Save className="w-6 h-6 text-mustard" />
              <h2 className="text-xl font-bold text-charcoal">Save Changes</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-charcoal/70 text-sm">
                Save your configuration to apply changes to the payment page and invoice system.
              </p>
              
              <Button 
                onClick={handleSaveConfig}
                className="w-full bg-mustard text-charcoal hover:bg-charcoal hover:text-mustard font-medium"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Configuration
              </Button>
              
              <Button 
                onClick={() => setIsAuthenticated(false)}
                className="w-full bg-charcoal/10 text-charcoal hover:bg-charcoal hover:text-mustard"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
