"use client";

import { forwardRef,useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Users } from "lucide-react";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal"
];

const distributorTypes = [
  "Individual Distributor",
  "Real Estate Agency",
  "Property Consultant",
  "Investment Advisor",
  "Wealth Management Firm",
  "Other"
];

export const DistributorSignupDialog = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    area: "",
    state: "",
    orgName: "",
    distributorType: "",
    experience: "",
    clientBase: "",
    aum: "",
    knowsFractional: false,
    hasInvested: false,
    hasClientInvested: false,
    platform: "",
    reference: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 cursor-pointer transition-colors">
          Sign up as Distributor
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-card/95 to-background/95 backdrop-blur-xl border-primary/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4 glow-text">
            Signup As Distributor
          </DialogTitle>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span>Distribute Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Grow Your Network</span>
            </div>
          </div>
        </DialogHeader>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </DialogContent>
    </Dialog>
  );
});

DistributorSignupDialog.displayName = "DistributorSignupDialog";