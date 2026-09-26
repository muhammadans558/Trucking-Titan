import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, Phone, Loader2 } from 'lucide-react';
import { COMPANY_PHONE_TEL } from '../data/truckingData';

interface CarrierOnboardingProps {
  onStartCarrierSetup: () => void;
}

export const CarrierOnboarding: React.FC<CarrierOnboardingProps> = ({ onStartCarrierSetup }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formDataState, setFormDataState] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    equipmentType: 'Dry Van',
    numberOfTrucks: '1-3 trucks',
    preferredLanes: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdekwpab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: formDataState.fullName,
          companyName: formDataState.companyName,
          phoneNumber: formDataState.phoneNumber,
          emailAddress: formDataState.emailAddress,
          equipmentType: formDataState.equipmentType,
          numberOfTrucks: formDataState.numberOfTrucks,
          preferredLanes: formDataState.preferredLanes,
          message: formDataState.message
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        onStartCarrierSetup();
      } else {
        alert('Kuch masla ho gaya hai, bara-e-meharbani dobara koshish karein.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network ka masla hai, dobara koshish karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="onboarding" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Get Connected With Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6">LET'S TALK ABOUT <span className="text-red-600">YOUR TRUCK.</span></h2>
            <p className="text-neutral-400 mb-8">
              Whether you are an owner-operator wanting to spend less time dialing brokers, or a small fleet seeking consistent dispatch coordination, we're ready to review your equipment and preferred lanes.
            </p>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl mb-6">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">Direct Dispatch Desk</span>
              <a href={`tel:${COMPANY_PHONE_TEL}`} className="text-xl font-bold flex items-center gap-2 hover:text-red-600 transition-colors">
                <Phone className="w-5 h-5 text-red-600" />
                Call Dispatch Desk
              </a>
              <span className="text-xs text-neutral-500 mt-1 block">Available for US Carriers & Drivers</span>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl mb-6">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">Direct Email Inquiries</span>
              <a href="mailto:contact.truckingtitan@gmail.com" className="text-lg font-bold hover:text-red-600 transition-colors">
                contact.truckingtitan@gmail.com
              </a>
              <span className="text-xs text-neutral-500 mt-1 block">Official Carrier Support Mail</span>
            </div>

            <div className="border border-red-900/40 bg-red-950/20 p-4 rounded-xl flex items-start gap-3 text-sm text-neutral-300">
              <Lock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p>Privacy guarantee: Your information is strictly used for dispatch consultation. We never distribute carrier contact details.</p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-2">Carrier Quick Setup</h3>
                <p className="text-neutral-400 text-sm mb-6">Fill out your fleet details below and our team will reach out immediately.</p>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formDataState.fullName}
                    onChange={(e) => setFormDataState({...formDataState, fullName: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formDataState.companyName}
                    onChange={(e) => setFormDataState({...formDataState, companyName: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                    placeholder="Titan Logistics LLC"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formDataState.phoneNumber}
                      onChange={(e) => setFormDataState({...formDataState, phoneNumber: e.target.value})}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="emailAddress"
                      required
                      value={formDataState.emailAddress}
                      onChange={(e) => setFormDataState({...formDataState, emailAddress: e.target.value})}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Equipment Type</label>
                    <select
                      name="equipmentType"
                      value={formDataState.equipmentType}
                      onChange={(e) => setFormDataState({...formDataState, equipmentType: e.target.value})}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                    >
                      <option value="Dry Van">Dry Van</option>
                      <option value="Reefer">Reefer</option>
                      <option value="Flatbed">Flatbed</option>
                      <option value="Power Only">Power Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Number of Trucks</label>
                    <select
                      name="numberOfTrucks"
                      value={formDataState.numberOfTrucks}
                      onChange={(e) => setFormDataState({...formDataState, numberOfTrucks: e.target.value})}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                    >
                      <option value="1-3 trucks">1-3 trucks</option>
                      <option value="4-10 trucks">4-10 trucks</option>
                      <option value="11+ trucks">11+ trucks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Preferred Lanes</label>
                  <input
                    type="text"
                    name="preferredLanes"
                    value={formDataState.preferredLanes}
                    onChange={(e) => setFormDataState({...formDataState, preferredLanes: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                    placeholder="e.g., Midwest, Texas, Southeast"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Additional Notes</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formDataState.message}
                    onChange={(e) => setFormDataState({...formDataState, message: e.target.value})}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                    placeholder="Tell us about your dispatch expectations..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-900/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Start Carrier Setup
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-neutral-400 mb-6">Thank you, {formDataState.fullName}. Your carrier details have been received successfully.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
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
