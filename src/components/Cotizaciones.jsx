import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/cotizaciones.css";
import { useNavigate } from "react-router-dom";
const { pricingPlans } = require("../components/SeoLandingPages");

export const Cotizaciones = ({ selectedIds = [] }) => {
  // SEO Configuration for Quotations Section
  const cotizacionesSEO = seoConfig.cotizaciones;

  const navigate = useNavigate();

  const selectedPlans =
    selectedIds.length > 0
      ? pricingPlans.filter((plan) => selectedIds.includes(plan.id))
      : pricingPlans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const handlePlanClick = (plan) => {
    // Sistema dual: planes SEO van a /servicios-globales, planes regulares van a /detalle
    const isSEOPlan = plan.ciudad !== undefined;
    const route = isSEOPlan ? `/servicios-consultora-toledo/${plan.id}` : `/detalle/${plan.id}`;
    navigate(route, { state: { plan } });
  };
  return (
    <>
      {useSEO(cotizacionesSEO)}
      <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contratá nuestros Servicios</h2>
          <p>
            Soluciones digitales a medida con precios transparentes y resultados
            garantizados
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {selectedPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-header">
                <h3>{plan.title}</h3>
                <div className="price">
                  {plan.price}{" "}
                  <span>
                    {plan.title === "Campañas Digitales" ? "/mes" : "único"}
                  </span>
                </div>
                <p>{plan.description}</p>
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  className="pricing-button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handlePlanClick(plan)}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
};
