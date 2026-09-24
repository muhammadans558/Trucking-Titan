import React, { useState } from 'react';
import { Mail, Phone, CheckCircle, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { EQUIPMENT_OPTIONS, COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_EMAIL } from '../data/truckingData';

interface FormState {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  equipmentType: string;
  numberOfTrucks: string;
  preferredLanes: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    equipmentType: 'Dry Van',
    numberOfTrucks: '1',
    preferredLanes: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^[0-9+\s()]{7,20}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.equipmentType) {
      newErrors.equipmentType = 'Equipment Type is required';
    }
    if (!formData.numberOfTrucks.trim()) {
      newErrors.numberOfTrucks = 'Number of trucks is required';
    }
    if (!formData.preferredLanes.trim()) {
      newErrors.preferredLanes = 'Preferred Lanes are required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      emailAddress: '',
      equipmentType: 'Dry Van',
      numberOfTrucks: '1',
      preferredLanes: '',
      message: '',
    });
    setErrors({});
  };

  const mailtoUrl = `mailto:${COMPANY_EMAIL}?subject=Carrier Dispatch Inquiry: ${encodeURIComponent(
    formData.companyName || formData.fullName || 'New Carrier'
  )}&body=${encodeURIComponent(
    `Carrier Details:\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Email: ${formData.emailAddress}\n` +
      `Equipment: ${formData.equipmentType}\n` +
      `Truck Count: ${formData.numberOfTrucks}\n` +
      `Preferred Lanes: ${formData.preferredLanes}\n\n` +
      `Message:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#0a0a0c] border-b border-neutral-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Phone & Email */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
              <span className="w-5 h-0.5 bg-red-600 inline-block" />
              <span>Get Connected With Our Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
              Let’s Talk About <br />
              <span className="text-red-500">Your Truck.</span>
            </h2>

            <p className="mt-3 text-base text-neutral-300 leading-relaxed font-normal">
              Whether you are an owner-operator wanting to spend less time dialing brokers, or a small fleet seeking consistent dispatch coordination, we’re ready to review your equipment and preferred lanes.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-6 space-y-4">
              {/* Phone Card */}
              <div className="p-5 bg-[#121217] border border-neutral-800 rounded-sm">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  Direct Dispatch Desk
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="text-base sm:text-lg font-bold font-heading text-white hover:text-red-400 transition-colors uppercase tracking-wider"
                    >
                      Call Dispatch Desk
                    </a>
                    <div className="text-xs text-neutral-400">Available for US Carriers & Drivers</div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 bg-[#121217] border border-neutral-800 rounded-sm">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  Direct Email Inquiries
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-red-400 transition-colors break-all"
                    >
                      {COMPANY_EMAIL}
                    </a>
                    <div className="text-xs text-neutral-400">Official Carrier Support Mail</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-950 border-l-2 border-red-600 border-y border-r border-neutral-800/80 rounded-sm text-xs sm:text-sm text-neutral-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Privacy guarantee: Your information is strictly used for dispatch consultation. We never distribute carrier contact details.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Carrier Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-neutral-800 p-6 sm:p-8 rounded-sm shadow-xl">
            {isSubmitted ? (
              <div className="py-6 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-red-950/40 border border-red-600/60 flex items-center justify-center text-red-500 mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold uppercase text-white tracking-wide">
                    Request Received
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your truck details have been received.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-sm text-xs sm:text-sm text-neutral-300 text-left max-w-md mx-auto space-y-1">
                  <div className="text-neutral-400 uppercase text-xs font-semibold">Summary:</div>
                  <div><strong className="text-white">Equipment:</strong> {formData.equipmentType} ({formData.numberOfTrucks} unit{Number(formData.numberOfTrucks) > 1 ? 's' : ''})</div>
                  <div><strong className="text-white">Preferred Lanes:</strong> {formData.preferredLanes}</div>
                  <div><strong className="text-white">Phone:</strong> {formData.phoneNumber}</div>
                  <div><strong className="text-white">Email:</strong> {formData.emailAddress}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Backup</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center text-neutral-300 hover:text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-sm border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="border-b border-neutral-800 pb-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-heading font-bold uppercase text-white tracking-wide">
                    Carrier Information Form
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Fields marked with <span className="text-red-500 font-bold">*</span> are required.
                  </p>
                </div>

                {/* Row 1: Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                      Full Name <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Miller"
                      className={`w-full bg-neutral-900 border text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-700/80 hover:border-neutral-600'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Miller Freight LLC"
                      className="w-full bg-neutral-900 border border-neutral-700/80 hover:border-neutral-600 text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                      Phone Number <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+1 9782263863"
                      className={`w-full bg-neutral-900 border text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 ${
                        errors.phoneNumber ? 'border-red-500' : 'border-neutral-700/80 hover:border-neutral-600'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phoneNumber}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                      Email Address <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      placeholder="driver@company.com"
                      className={`w-full bg-neutral-900 border text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 ${
                        errors.emailAddress ? 'border-red-500' : 'border-neutral-700/80 hover:border-neutral-600'
                      }`}
                    />
                    {errors.emailAddress && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.emailAddress}</span>
                    )}
                  </div>
                </div>

                {/* Row 3: Equipment Type & Number of Trucks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                      Equipment Type <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      value={formData.equipmentType}
                      onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-700/80 hover:border-neutral-600 text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                    >
                      {EQUIPMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-neutral-900 text-neutral-100">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.equipmentType && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.equipmentType}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                      Number of Trucks <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={formData.numberOfTrucks}
                      onChange={(e) => setFormData({ ...formData, numberOfTrucks: e.target.value })}
                      placeholder="1"
                      className={`w-full bg-neutral-900 border text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 ${
                        errors.numberOfTrucks ? 'border-red-500' : 'border-neutral-700/80 hover:border-neutral-600'
                      }`}
                    />
                    {errors.numberOfTrucks && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.numberOfTrucks}</span>
                    )}
                  </div>
                </div>

                {/* Row 4: Preferred Lanes */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                    Preferred Lanes <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.preferredLanes}
                    onChange={(e) => setFormData({ ...formData, preferredLanes: e.target.value })}
                    placeholder="e.g. Midwest to Southeast, Texas regional, or 48-States OTR"
                    className={`w-full bg-neutral-900 border text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 ${
                      errors.preferredLanes ? 'border-red-500' : 'border-neutral-700/80 hover:border-neutral-600'
                    }`}
                  />
                  {errors.preferredLanes && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.preferredLanes}</span>
                  )}
                </div>

                {/* Row 5: Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                    Message <span className="text-red-500 font-bold">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your equipment specs, current location, or dispatch questions..."
                    className={`w-full bg-neutral-900 border text-neutral-100 text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 ${
                      errors.message ? 'border-red-500' : 'border-neutral-700/80 hover:border-neutral-600'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wider py-3.5 rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-950/60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2 text-xs sm:text-sm text-neutral-400">
                  Prefer direct phone? Call <a href={COMPANY_PHONE_TEL} className="text-white hover:text-red-400 font-bold">{COMPANY_PHONE}</a> or email <a href={`mailto:${COMPANY_EMAIL}`} className="text-red-400 underline">{COMPANY_EMAIL}</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
