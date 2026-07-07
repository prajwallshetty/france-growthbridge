import mongoose, { Schema } from "mongoose";

const SettingSchema = new Schema(
  {
    contactEmail: { type: String, default: "growthbridge16@gmail.com" },
    phoneNumber: { type: String, default: "+33 744896755" },
    officeAddress: { type: String, default: "121 avenue general frere 69008 Lyon France" },
    socialTwitter: { type: String, default: "https://twitter.com/growthbridge" },
    socialLinkedin: { type: String, default: "https://linkedin.com/company/growthbridge" },
    socialGithub: { type: String, default: "https://github.com/growthbridge" },
    seoDefaultTitle: { type: String, default: "Growth Bridge — Creative Digital Agency" },
    seoDefaultDescription: { type: String, default: "We design and build enduring digital interfaces for startups." },
    maintenanceMode: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Setting || mongoose.model("Setting", SettingSchema);
