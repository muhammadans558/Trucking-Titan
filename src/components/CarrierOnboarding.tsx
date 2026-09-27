import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, Phone, Loader2, AlertCircle } from 'lucide-react';
import { COMPANY_PHONE_TEL, EQUIPMENT_OPTIONS } from '../data/truckingData';

interface CarrierOnboardingProps {
  onStartCarrierSetup?: () => void;
}

export const CarrierOnboarding: React.FC<CarrierOnboardingProps> = ({ onStartCarrierSetup }) => {
  const [formDataState, setFormDataState] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    equipmentType: 'Dry Van',
    numberOfTrucks: '1-3 trucks',
    preferredLanes: '',
    mcNumber: '',
    dotNumber: '',
    message: '',
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({ ...prev, [name]: value }));
    if (validationError) {
      setValidationError(null);
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    if (!formDataState.fullName.trim()) return 'Full Name is required';
    if (!formDataState.companyName.trim()) return 'Company Name is required';
    if (!formDataState.phoneNumber.trim()) return 'Phone Number is required';
    if (!formDataState.emailAddress.trim()) return 'Email Address is required';
    if (!/\S+@\S+\.\S+/.test(formDataState.emailAddress)) return 'Please enter a valid email address';
    if (!formDataState.equipmentType.trim()) return 'Equipment Type is required';
    if (!formDataState.numberOfTrucks.trim()) return 'Number of Trucks is required';
    if (!formDataState.preferredLanes.trim()) return 'Preferred Lanes / Regions is required';
    if (!formDataState.mcNumber.trim()) return 'MC Number is required';
    if (!formDataState.dotNumber.trim()) return 'DOT Number is required';
    if (!formDataState.message.trim()) return 'Message / Special Requirements is required';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }

    setValidationError(null);
    setSubmitError(null);
    setIsSubmitting(true);

    const now = new Date();
    const payload = {
      fullName: formDataState.fullName.trim(),
      companyName: formDataState.companyName.trim(),
      phoneNumber: formDataState.phoneNumber.trim(),
      emailAddress: formDataState.emailAddress.trim(),
      equipmentType: formDataState.equipmentType,
      numberOfTrucks: formDataState.numberOfTrucks,
      preferredLanes: formDataState.preferredLanes.trim(),
      mcNumber: formDataState.mcNumber.trim(),
      dotNumber: formDataState.dotNumber.trim(),
      message: formDataState.message.trim(),
      // Also provide Title Case keys for broad Google Sheet header compatibility
      'Full Name': formDataState.fullName.trim(),
      'Company Name': formDataState.companyName.trim(),
      'Phone Number': formDataState.phoneNumber.trim(),
      'Email Address': formDataState.emailAddress.trim(),
      'Equipment Type': formDataState.equipmentType,
      'Number of Trucks': formDataState.numberOfTrucks,
      'Preferred Lanes / Regions': formDataState.preferredLanes.trim(),
      'MC Number': formDataState.mcNumber.trim(),
      'DOT Number': formDataState.dotNumber.trim(),
      'Message / Special Requirements': formDataState.message.trim(),
      submissionDate: now.toLocaleString('en-US', { timeZone: 'America/New_York' }),
      timestamp: now.toISOString(),
    };

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzVF-Uhd7Y6975L2Lu_w-SA5WzUi4W-nPLEgBlfNBvNgPnA8SRfGwEd0xziv69XTKgP/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        }
      );

      setSubmitted(true);
      if (onStartCarrierSetup) {
        onStartCarrierSetup();
      }
    } catch (err) {
      console.error('Error submitting carrier onboarding form:', err);
      setSubmitError('Something went wrong while submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setValidationError(null);
    setFormDataState({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      emailAddress: '',
      equipmentType: 'Dry Van',
      numberOfTrucks: '1-3 trucks',
      preferredLanes: '',
      mcNumber: '',
      dotNumber: '',
      message: '',
    });
  };

  return (
    <section id="carrier-onboarding" className="py-20 bg-neutral-950 text-white relative">
      {/* Target anchor fallback for #onboarding links */}
      <div id="onboarding" className="absolute -top-20 left-0 w-0 h-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Contact & Dispatch Desk Information */}
          <div>
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              Get Connected With Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6">
              LET'S TALK ABOUT <span className="text-red-600">YOUR TRUCK.</span>
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Whether you are an owner-operator wanting to spend less time dialing brokers, or a
              small fleet seeking consistent dispatch coordination, we're ready to review your
              equipment and preferred lanes.
            </p>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl mb-6">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                Direct Dispatch Desk
              </span>
              <a
                href={`tel:${COMPANY_PHONE_TEL}`}
                className="text-xl font-bold flex items-center gap-2 hover:text-red-600 transition-colors"
              >
                <Phone className="w-5 h-5 text-red-600" />
                Call Dispatch Desk
              </a>
              <span className="text-xs text-neutral-500 mt-1 block">
                Available for US Carriers & Drivers
              </span>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl mb-6">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                Direct Email Inquiries
              </span>
              <a
                href="mailto:contact.truckingtitan@gmail.com"
                className="text-lg font-bold hover:text-red-600 transition-colors"
              >
                contact.truckingtitan@gmail.com
              </a>
              <span className="text-xs text-neutral-500 mt-1 block">
                Official Carrier Support Mail
              </span>
            </div>

            <div className="border border-red-900/40 bg-red-950/20 p-4 rounded-xl flex items-start gap-3 text-sm text-neutral-300">
              <Lock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p>
                Privacy guarantee: Your information is strictly used for dispatch consultation.
                We never distribute carrier contact details.
              </p>
            </div>
          </div>

          {/* Right Column: Original Two-Column Form Layout with MC & DOT */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Carrier Quick Setup</h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    Fill out your fleet details below and our team will reach out immediately.
                  </p>
                </div>

                {validationError && (
                  <div className="p-3 bg-red-950/50 border border-red-600/60 rounded-lg flex items-center gap-2.5 text-red-400 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{validationError}</span>
                  </div>
                )}

                {submitError && (
                  <div className="p-3 bg-red-950/50 border border-red-600/60 rounded-lg flex items-center gap-2.5 text-red-400 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Full Name <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formDataState.fullName}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Company Name <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formDataState.companyName}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Titan Logistics LLC"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Phone Number <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formDataState.phoneNumber}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Email Address <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      required
                      value={formDataState.emailAddress}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Row 3: Equipment Type & Number of Trucks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Equipment Type <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <select
                      name="equipmentType"
                      required
                      value={formDataState.equipmentType}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    >
                      {EQUIPMENT_OPTIONS.map((eq) => (
                        <option key={eq} value={eq}>
                          {eq}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Number of Trucks <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <select
                      name="numberOfTrucks"
                      required
                      value={formDataState.numberOfTrucks}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="1-3 trucks">1-3 trucks</option>
                      <option value="4-10 trucks">4-10 trucks</option>
                      <option value="11+ trucks">11+ trucks</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Preferred Lanes / Regions */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    Preferred Lanes / Regions <span className="text-red-500 font-bold ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="preferredLanes"
                    required
                    value={formDataState.preferredLanes}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="e.g., Midwest, Texas, Southeast, Nationwide"
                  />
                </div>

                {/* Row 5: MC Number & DOT Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      MC Number <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="mcNumber"
                      required
                      value={formDataState.mcNumber}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="MC-123456"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      DOT Number <span className="text-red-500 font-bold ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="dotNumber"
                      required
                      value={formDataState.dotNumber}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="USDOT-765432"
                    />
                  </div>
                </div>

                {/* Row 6: Message / Special Requirements (Additional Notes) */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    Message / Special Requirements <span className="text-red-500 font-bold ml-0.5">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formDataState.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Tell us about your equipment, preferred freight types, or dispatch requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/40 uppercase tracking-wider text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Carrier Data...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Carrier Setup</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 px-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">Thank you!</h3>
                <p className="text-neutral-300 mb-6 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you! Your information has been submitted successfully. Our team will contact you soon.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
