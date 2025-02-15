"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Code } from "lucide-react";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal"
];

const projectStages = [
  "Planning Phase",
  "Under Construction",
  "Near Completion",
  "Ready for Possession",
  "Partially Occupied"
];

export function DeveloperSignupDialog() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    area: "",
    state: "",
    orgName: "",
    brand: "",
    projectName: "",
    projectStage: "",
    saleableUnitDesc: "",
    estimatedValue: "",
    expectedPrice: "",
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
      <DialogTrigger asChild>
        <Button 
          variant="ghost"
          className="text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 cursor-pointer transition-colors relative group w-full text-left px-4 py-2"
        >
          Sign up as Developer
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-card/95 to-background/95 backdrop-blur-xl border-primary/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4 glow-text">
            Signup As Developer
          </DialogTitle>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span>List Your Property</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span>Join RealX Network</span>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email ID*</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number*</Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City*</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="area">Area/Location*</Label>
              <Input
                id="area"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State*</Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger className="bg-card/30 border-primary/20 focus:border-primary/40">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization name, if any</Label>
              <Input
                id="orgName"
                value={formData.orgName}
                onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand (mention main Brand)*</Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name*</Label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectStage">Project Stage*</Label>
              <Select
                value={formData.projectStage}
                onValueChange={(value) => setFormData({ ...formData, projectStage: value })}
              >
                <SelectTrigger className="bg-card/30 border-primary/20 focus:border-primary/40">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {projectStages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="saleableUnitDesc">Saleable Unit Description*</Label>
              <Input
                id="saleableUnitDesc"
                value={formData.saleableUnitDesc}
                onChange={(e) => setFormData({ ...formData, saleableUnitDesc: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="estimatedValue">Estimated Market Value*</Label>
              <Input
                id="estimatedValue"
                type="number"
                value={formData.estimatedValue}
                onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectedPrice">Expected Sale Price (on RealX)*</Label>
              <Input
                id="expectedPrice"
                type="number"
                value={formData.expectedPrice}
                onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                className="bg-card/30 border-primary/20 focus:border-primary/40"
                required
              />
            </div>
          </div>

          {/* Experience Questions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="knowsFractional">Do you know about fractional ownership?</Label>
              <Switch
                id="knowsFractional"
                checked={formData.knowsFractional}
                onCheckedChange={(checked) => setFormData({ ...formData, knowsFractional: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="hasInvested">
                Have you and your clients have invested through fractional ownership?
              </Label>
              <Switch
                id="hasInvested"
                checked={formData.hasInvested}
                onCheckedChange={(checked) => setFormData({ ...formData, hasInvested: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="hasClientInvested">
                Have you gotten any of your clients to invest in fractional ownership?
              </Label>
              <Switch
                id="hasClientInvested"
                checked={formData.hasClientInvested}
                onCheckedChange={(checked) => setFormData({ ...formData, hasClientInvested: checked })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platform">If Yes, then select platform(s) you have used</Label>
              <Select
                value={formData.platform}
                onValueChange={(value) => setFormData({ ...formData, platform: value })}
              >
                <SelectTrigger className="bg-card/30 border-primary/20 focus:border-primary/40">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="platform1">Platform 1</SelectItem>
                  <SelectItem value="platform2">Platform 2</SelectItem>
                  <SelectItem value="platform3">Platform 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reference">RealX Reference</Label>
              <Select
                value={formData.reference}
                onValueChange={(value) => setFormData({ ...formData, reference: value })}
              >
                <SelectTrigger className="bg-card/30 border-primary/20 focus:border-primary/40">
                  <SelectValue placeholder="Select reference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reference1">Reference 1</SelectItem>
                  <SelectItem value="reference2">Reference 2</SelectItem>
                  <SelectItem value="reference3">Reference 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              className="w-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}