import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Section4 = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "discovery" });
      cal("ui", { "hideEventTypeDetails": true, "layout": "month_view" });
    })();
  }, [])

  return (
    <motion.div
      id="section4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex flex-col justify-center items-center py-10 md:py-20">
        <h2 className="md:text-4xl text-2xl font-[400] text-center mb-8 text-white leading-tight">
          Let’s Build Something Great!<br />
          Book a Call or Drop an Email.
        </h2>
        <div className="flex items-center justify-center gap-3">

                <a
          href="mailto:hello@murtaza.work"
          className="bg-[#353535] text-white px-3 py-2 rounded-lg font-medium text-sm no-underline mb-12 inline-block hover:bg-[#444] transition"
        >
          hello@murtaza.work
        </a>
        <a
          href="https://www.upwork.com/freelancers/~011bb3aa35b3bd5e52"
          className="bg-[#353535] text-white px-3 py-2 rounded-lg font-medium text-sm no-underline mb-12 inline-block hover:bg-[#444] transition"
        >
            Invite me on Upwork
        </a>
       
      </div>
      </div>
      <Cal
        namespace="discovery"
        calLink="murtaza-akbar/discovery"
        style={{  overflow: "scroll" }}
        className="w-[80%] md:w-full m-auto md:h-full md:mb-0 mb-20"
        config={{ layout: "month_view" }}
      />
    </motion.div>
  );
};

export default Section4;