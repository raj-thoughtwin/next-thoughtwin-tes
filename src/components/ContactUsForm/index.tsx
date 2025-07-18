import { FormikHelpers, useFormik } from "formik";
import { ContactUsFromInterface } from "@/types/contactUsTypes";
import { servicesArray } from "@/constants/constants";
import Loader from "../Loader";
import GenerateCaptchaInput from "../GenerateCaptchaInput";
import styles from "./contactUsForm.module.scss";

interface ContactUsProps {
  onSubmit: (values: ContactUsFromInterface, formikHelpers: FormikHelpers<ContactUsFromInterface>) => Promise<void>;
  validationSchema: string | {};
  isSubmitting: boolean;
  captchaRef: React.RefObject<any>;
}

const ContactUsForm = ({ onSubmit, validationSchema, isSubmitting, captchaRef }: ContactUsProps) => {
  const formik = useFormik<ContactUsFromInterface>({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      skypeWhatsapp: "",
      description: "",
      services: [],
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, helpers) => {
      await onSubmit(values, helpers);
    },
  });

  const toggleService = (service: string) => {
    const services = formik.values.services || [];
    if (services.includes(service)) {
      formik.setFieldValue(
        "services",
        services.filter((s) => s !== service)
      );
    } else {
      formik.setFieldValue("services", [...services, service]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>
              Full Name <span className={styles.required_icon}>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter the Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control ${formik.touched.fullName && formik.errors.fullName ? styles.formError : ""}`}
            />
            {formik.touched.fullName && formik.errors.fullName && <small className="text-danger">{formik.errors.fullName}</small>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>
              Business Email <span className={styles.required_icon}>*</span>
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter the Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && <small className="text-danger">{formik.errors.email}</small>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>
              Contact Number <span className={styles.required_icon}>*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter the number"
              value={formik.values.phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only numeric characters
                if (/^\d*$/.test(value)) {
                  formik.setFieldValue("phoneNumber", value);
                }
              }}
              onBlur={formik.handleBlur}
              maxLength={10}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && <small className="text-danger">{formik.errors.phoneNumber}</small>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>
              Skype ID / Whatsapp No. <span className={styles.required_icon}>*</span>
            </label>
            <input
              type="text"
              name="skypeWhatsapp"
              className="form-control"
              placeholder="Enter the number"
              value={formik.values.skypeWhatsapp}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only digits
                if (/^\d*$/.test(value)) {
                  formik.setFieldValue("skypeWhatsapp", value);
                }
              }}
              onBlur={formik.handleBlur}
              maxLength={10} // optional: you can adjust this based on international formats
            />
            {formik.touched.skypeWhatsapp && formik.errors.skypeWhatsapp && (
              <small className="text-danger">{formik.errors.skypeWhatsapp}</small>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>
              Message <span className={styles.required_icon}>*</span>
            </label>
            <textarea
              rows={5}
              name="description"
              placeholder="Write something here..."
              className="form-control"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description && <small className="text-danger">{formik.errors.description}</small>}
          </div>
        </div>

        <div className="col-md-6">
          <label>Select The Service</label>
          <div className={styles.items_collection}>
            {servicesArray?.map((service) => (
              <div className={`${styles.info_block} clearfix`} key={service}>
                <div className={`${styles.itemcontent} btn-group subform`}>
                  <label className={`btn btn-default ${formik.values?.services?.includes(service) ? "active" : ""}`}>
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formik?.values?.services?.includes(service)}
                      onChange={() => toggleService(service)}
                      onBlur={formik.handleBlur}
                    />
                    <h5>{service}</h5>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 mt-2">
          <GenerateCaptchaInput ref={captchaRef} label="Please solve this" />
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn_send" disabled={isSubmitting}>
            {isSubmitting ? <Loader /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
