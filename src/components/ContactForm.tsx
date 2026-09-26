import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    equipmentType: 'Dry Van',
    numberOfTrucks: '1',
    preferredLanes: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Invalid email address';
    }
    if (!formData.preferredLanes.trim()) newErrors.preferredLanes = 'Preferred lanes are required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-neutral-400 mb-6">
          Thank you for reaching out. Our dispatch team will review your equipment and lanes and contact you shortly.
        </p>
        <button
          onClick={() => {
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
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full bg-neutral-950 border ${errors.fullName ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Flash Fleet LLC"
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={`w-full bg-neutral-950 border ${errors.phoneNumber ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full bg-neutral-950 border ${errors.emailAddress ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors`}
          />
          {errors.emailAddress && <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Equipment Type *
          </label>
          <select
            name="equipmentType"
            value={formData.equipmentType}
            onChange={handleChange}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="Dry Van">Dry Van</option>
            <option value="Reefer">Reefer</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Power Only">Power Only</option>
            <option value="Step Deck">Step Deck</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Number of Trucks *
          </label>
          <input
            type="number"
            name="numberOfTrucks"
            min="1"
            value={formData.numberOfTrucks}
            onChange={handleChange}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Preferred Lanes / Regions *
        </label>
        <input
          type="text"
          name="preferredLanes"
          value={formData.preferredLanes}
          onChange={handleChange}
          placeholder="e.g., Midwest, Texas, Southeast"
          className={`w-full bg-neutral-950 border ${errors.preferredLanes ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors`}
        />
        {errors.preferredLanes && <p className="text-red-500 text-xs mt-1">{errors.preferredLanes}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Message / Special Requirements *
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dispatch needs..."
          className={`w-full bg-neutral-950 border ${errors.message ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            <span>PROCESSING REQUEST...</span>
          </>
        ) : (
          <>
            <span>GET STARTED</span>
            <Send className="w-5 h-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
};
