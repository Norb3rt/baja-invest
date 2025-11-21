import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  variant?: 'default' | 'inline';
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.phone && !/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTouched({});
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const renderField = (
    name: keyof typeof formData,
    type: string = 'text',
    placeholder: string = '',
    isTextarea: boolean = false
  ) => {
    const hasError = touched[name] && errors[name];
    const Component = isTextarea ? 'textarea' : 'input';

    return (
      <div key={name} className="relative">
        <Component
          {...(isTextarea ? {} : { type })}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          required={name === 'name' || name === 'email'}
          rows={isTextarea ? 6 : undefined}
          className={`w-full px-6 py-4 input-premium rounded-xl text-white placeholder-gray-400 text-lg resize-none transition-all duration-300 ${
            hasError
              ? 'border-red-500/50 bg-red-500/5'
              : 'border-white/20 hover:border-white/30'
          }`}
        />
        {hasError && (
          <div className="absolute right-4 top-4 flex items-center space-x-2">
            <AlertCircle size={20} className="text-red-400" />
          </div>
        )}
        {hasError && (
          <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
            <span>{errors[name]}</span>
          </p>
        )}
      </div>
    );
  };

  if (variant === 'inline') {
    return (
      <div className="glass-card-strong rounded-2xl p-8 glow-border hover-lift">
        <h3 className="text-2xl font-bold text-white mb-2">
          Claim Your Oceanfront Legacy
        </h3>
        <p className="text-gray-300 mb-6 text-sm">Limited availability - 35 homes remaining</p>

        {submitted ? (
          <div className="flex items-center justify-center space-x-3 py-8 scale-in">
            <CheckCircle size={32} className="text-emerald-400 animate-pulse" />
            <div>
              <p className="text-emerald-400 font-semibold">Message Sent!</p>
              <p className="text-gray-300 text-sm">We'll contact you within 24 hours</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderField('name', 'text', 'Your Name')}
            {renderField('email', 'email', 'Email Address')}
            {renderField('phone', 'tel', 'Phone Number')}

            <button
              type="submit"
              className="w-full btn-premium text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 group"
            >
              <span>Get Exclusive Access</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted ? (
        <div className="glass-card-strong rounded-2xl p-12 text-center scale-in flex flex-col items-center justify-center space-y-4">
          <CheckCircle size={64} className="text-emerald-400 animate-bounce-soft" />
          <div>
            <p className="text-white text-2xl font-bold mb-2">Message Sent Successfully!</p>
            <p className="text-gray-300">We'll contact you within 24 hours with exclusive property details.</p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderField('name', 'text', 'Your Name')}
            {renderField('email', 'email', 'Email Address')}
          </div>

          {renderField('phone', 'tel', 'Phone Number')}
          {renderField('message', 'text', 'Tell us about your dream oceanfront home...', true)}

          <button
            type="submit"
            className="w-full btn-premium text-white font-bold py-6 px-8 rounded-xl flex items-center justify-center space-x-3 text-lg group shadow-glow-gold"
          >
            <span>Reserve Your Property Before It's Gone</span>
            <Send size={24} className="group-hover:translate-x-1 group-hover:translate-y-0 transition-transform" />
          </button>

          <p className="text-center text-gray-400 text-sm">
            ✓ No spam • ✓ Verified leads only • ✓ 24-hour response guarantee
          </p>
        </>
      )}
    </form>
  );
}

export default ContactForm;
