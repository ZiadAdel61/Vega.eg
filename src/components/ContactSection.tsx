import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Building,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { companyContact, integratedServices } from '../data/companyData';
import { RfqFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefilledService = '', 
  prefilledProject = '' 
}) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || 'أعمال الإنشاءات والبنية التحتية',
    projectDetails: prefilledProject ? `أرغب في الاستفسار عن تفاصيل مطابقة لمشروع: ${prefilledProject}` : '',
    estimatedArea: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if prefilled changes from outside
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  React.useEffect(() => {
    if (prefilledProject) {
      setFormData(prev => ({ 
        ...prev, 
        projectDetails: `أرغب في استشارة هندسية وعرض سعر لمشروع مماثل لـ: ${prefilledProject}` 
      }));
    }
  }, [prefilledProject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate immediate RFQ confirmation and prepare WhatsApp message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*طلب استشارة هندسية وتسعير - شركة فيجا*\n` +
      `---------------------------\n` +
      `*الاسم:* ${formData.fullName}\n` +
      `*الجوال:* ${formData.phone}\n` +
      `*البريد:* ${formData.email}\n` +
      `*نوع الخدمة:* ${formData.service}\n` +
      `*المساحة التقديرية:* ${formData.estimatedArea || 'غير محددة'}\n` +
      `*تفاصيل المشروع:* ${formData.projectDetails}\n`
    );
    window.open(`https://wa.me/966545738638?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-vega-light text-vega-dark relative overflow-hidden">
      {/* Background blueprint tech grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vega-deep-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-vega-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-vega-sand text-vega-purple text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <MessageSquare className="w-4 h-4 text-vega-purple" />
            <span>تواصل معنا وطلب استشارة هندسية | Request a Quote</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vega-dark tracking-tight mb-4">
            دعنا نحول رؤيتك إلى{' '}
            <span className="text-vega-purple">واقع إنشائي مبهر</span>
          </h2>
          <p className="text-base sm:text-lg text-vega-dark/80 leading-relaxed">
            فريقنا الاستشاري على أتم الاستعداد لمناقشة متطلبات مشروعك، تقديم المشورة الفنية، وإعداد عروض أسعار تفصيلية شفافة.
          </p>
        </div>

        {/* Split Layout: Contact Information & RFQ Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Contact Information Block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-vega-sand shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vega-purple/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-xl font-black text-vega-dark mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-vega-purple" />
                <span>بيانات التواصل والمقر الرئيسي</span>
              </h3>

              <div className="space-y-5">
                {/* Headquarters */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-vega-light border border-vega-sand text-vega-purple flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-vega-dark/60">المقر الرئيسي:</span>
                    <strong className="block text-sm sm:text-base font-bold text-vega-dark mt-0.5">
                      {companyContact.location}
                    </strong>
                    <span className="text-xs text-vega-dark/70">{companyContact.locationDetailed}</span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-vega-light border border-vega-sand text-vega-purple flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-vega-dark/60">الهاتف والواتساب الموحد:</span>
                    <a
                      href={`tel:${companyContact.phoneClean}`}
                      className="block text-base sm:text-lg font-black text-vega-purple font-mono hover:text-vega-deep-blue transition-colors mt-0.5"
                    >
                      {companyContact.phone}
                    </a>
                    <a
                      href={companyContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold mt-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>محادثة واتساب سريعة</span>
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-vega-light border border-vega-sand text-vega-purple flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="block text-xs font-semibold text-vega-dark/60">البريد الإلكتروني الرسمي:</span>
                    <div className="flex flex-col gap-1 mt-1">
                      <a
                        href={`mailto:${companyContact.emailGeneral}`}
                        className="text-sm font-mono text-vega-dark hover:text-vega-purple transition-colors"
                      >
                        {companyContact.emailGeneral}
                        <span className="text-[11px] text-vega-dark/60 mr-2">(الاستفسارات العامة)</span>
                      </a>
                      <a
                        href={`mailto:${companyContact.emailProjects}`}
                        className="text-sm font-mono text-vega-deep-blue hover:underline"
                      >
                        {companyContact.emailProjects}
                        <span className="text-[11px] text-vega-dark/60 mr-2">(المناقصات وإدارة المشروعات)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-vega-light border border-vega-sand text-vega-purple flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-vega-dark/60">الموقع الإلكتروني الرسمي:</span>
                    <a
                      href={companyContact.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-mono font-bold text-vega-purple hover:text-vega-deep-blue transition-colors mt-0.5"
                    >
                      {companyContact.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 pt-6 border-t border-vega-sand/50 flex items-center justify-between text-xs text-vega-dark/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-vega-purple" />
                  <span>ساعات العمل الرسمية:</span>
                </div>
                <span className="font-semibold text-vega-dark">الأحد - الخميس (8:00 ص - 5:00 م)</span>
              </div>
            </div>

            {/* Quick WhatsApp Direct Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">تواصل مباشر عبر الواتساب</h4>
                  <p className="text-xs text-emerald-800">رد فوري من مهندس الاستشارات خلال دقائق</p>
                </div>
              </div>
              <a
                href={companyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-600/20 whitespace-nowrap cursor-pointer"
              >
                تحدث معنا الآن
              </a>
            </div>

          </div>

          {/* Column 2: RFQ Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-vega-sand shadow-lg relative">
              <h3 className="text-xl font-black text-vega-dark mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-vega-purple" />
                <span>نموذج طلب استشارة وعرض سعر (RFQ)</span>
              </h3>
              <p className="text-xs sm:text-sm text-vega-dark/70 mb-8">
                يرجى تزويدنا بتفاصيل المشروع وسيقوم الفريق الهندسي بدراسة الطلب وإعداد المقترح الفني والمالي.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-emerald-950 mb-2">تم استلام طلبكم بنجاح!</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed mb-6 max-w-md mx-auto">
                    شكراً لتواصلكم مع شركة فيجا للمقاولات والهندسة. سيقوم مستشارنا الهندسي بمراجعة التفاصيل والتواصل معكم خلال 24 ساعة عمل.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/25 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>إرسال نسخة فورية عبر الواتساب</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-vega-light hover:bg-slate-200 text-vega-dark font-semibold text-xs sm:text-sm border border-vega-sand transition-colors cursor-pointer"
                    >
                      تقديم طلب آخر
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-vega-dark mb-1.5">
                        الاسم بالكامل / اسم الجهة <span className="text-vega-purple">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="مثال: م. فهد الشمري / شركة الأفق"
                        className="w-full bg-vega-light border border-vega-sand rounded-xl px-4 py-3 text-sm text-vega-dark placeholder-vega-dark/40 focus:outline-none focus:border-vega-deep-blue focus:ring-1 focus:ring-vega-deep-blue transition-all"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-vega-dark mb-1.5">
                        رقم الجوال / الواتساب <span className="text-vega-purple">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full bg-vega-light border border-vega-sand rounded-xl px-4 py-3 text-sm text-vega-dark placeholder-vega-dark/40 focus:outline-none focus:border-vega-deep-blue focus:ring-1 focus:ring-vega-deep-blue transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-vega-dark mb-1.5">
                        البريد الإلكتروني <span className="text-vega-purple">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        dir="ltr"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-vega-light border border-vega-sand rounded-xl px-4 py-3 text-sm text-vega-dark placeholder-vega-dark/40 focus:outline-none focus:border-vega-deep-blue focus:ring-1 focus:ring-vega-deep-blue transition-all font-mono"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-vega-dark mb-1.5">
                        نوع الخدمة المطلوبة <span className="text-vega-purple">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-vega-light border border-vega-sand rounded-xl px-4 py-3 text-sm text-vega-dark focus:outline-none focus:border-vega-deep-blue focus:ring-1 focus:ring-vega-deep-blue transition-all"
                      >
                        {integratedServices.map((s) => (
                          <option key={s.id} value={s.title} className="bg-white text-vega-dark">
                            {s.title}
                          </option>
                        ))}
                        <option value="استشارة هندسية عامة" className="bg-white text-vega-dark">
                          استشارة هندسية عامة / أخرى
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Area */}
                  <div>
                    <label className="block text-xs font-bold text-vega-dark mb-1.5">
                      المساحة التقديرية أو موقع المشروع (اختياري)
                    </label>
                    <input
                      type="text"
                      name="estimatedArea"
                      value={formData.estimatedArea}
                      onChange={handleChange}
                      placeholder="مثال: 5,000 م² - الرياض / حي الملقا"
                      className="w-full bg-vega-light border border-vega-sand rounded-xl px-4 py-3 text-sm text-vega-dark placeholder-vega-dark/40 focus:outline-none focus:border-vega-deep-blue focus:ring-1 focus:ring-vega-deep-blue transition-all"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-vega-dark mb-1.5">
                      تفاصيل ومتطلبات المشروع <span className="text-vega-purple">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="اذكر بإيجاز نطاق الأعمال، نوع المبنى (تجاري، سكني، صناعي)، والجدول الزمني المأمول..."
                      className="w-full bg-vega-light border border-vega-sand rounded-xl px-4 py-3 text-sm text-vega-dark placeholder-vega-dark/40 focus:outline-none focus:border-vega-deep-blue focus:ring-1 focus:ring-vega-deep-blue transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-center gap-2 text-xs text-vega-dark/70">
                    <ShieldCheck className="w-4 h-4 text-vega-deep-blue flex-shrink-0" />
                    <span>كافة البيانات والمخططات تخضع للسرية التامة ولا يتم مشاركتها مع أي طرف ثالث.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-white font-black text-base bg-vega-deep-blue hover:bg-vega-electric-blue transition-all duration-300 shadow-xl shadow-vega-deep-blue/30 hover:shadow-vega-electric-blue/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>جاري إرسال الطلب...</span>
                    ) : (
                      <>
                        <span>إرسال طلب التسعير والاستشارة</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
