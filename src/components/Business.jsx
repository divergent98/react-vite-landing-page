import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import { futuristic1, futuristic2, futuristic3} from "../assets";


const Business = () =>  (
  <section id="features" className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2center} mb-20`}>
 
 
    Unleash the Power 
  <br className="sm:block hidden" />of SynthAI:
    </h2>

  <div className="flex flex-col lg:flex-row w-full gap-20">
    <div className="w-full md:w-1/3 lg:w-1/3 text-white">
    <img src={futuristic1} alt="billing" className="relative z-[5]  h-auto " />
    <div className={`flex flex-row p-6 rounded-[20px] feature-card custom-positioning`}>

<div className="flex-1 flex flex-col ">
<h4 className="font-poppins font-semibold text-white text-[18px]  mb-5">
  {features[0].title}
</h4>
<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
  {features[0].content}
</p>
</div>
</div>
    </div> <div className="w-full md:w-1/3 lg:w-1/3 text-white">
    <img src={futuristic3} alt="billing" className="relative z-[5]  h-auto" />
    <div className={`flex flex-row p-6 rounded-[20px] feature-card custom-positioning`}>

<div className="flex-1 flex flex-col ">
<h4 className="font-poppins font-semibold text-white text-[18px]  mb-5">
  {features[1].title}
</h4>
<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
  {features[1].content}
</p>
</div>
</div>
    </div>
    <div className="w-full md:w-1/3 lg:w-1/3 text-white">
    <img src={futuristic2} alt="billing" className="relative z-[5]  h-auto" />
    <div className={`flex flex-row p-6 rounded-[20px] feature-card custom-positioning`}>

<div className="flex-1 flex flex-col ">
<h4 className="font-poppins font-semibold text-white text-[18px]  mb-5">
  {features[2].title}
</h4>
<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
  {features[2].content}
</p>
</div>
</div>
    </div>

  </div>        

  <div className="flex justify-center w-full">
<Button  />
  </div>
  
  </div>


</section>
/*   <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2center} mb-`}>
   
   
      Unleash the Power 
    <br className="sm:block hidden" />of SynthAI:
      </h2>
  
    <div className="flex flex-row w-full gap-20">
      <div className="w-full md:w-1/3 lg:w-1/3 text-white">
      <img src={futuristic1} alt="billing" className="relative z-[5]  h-auto " />
      </div> <div className="w-full md:w-1/3 lg:w-1/3 text-white">
      <img src={futuristic3} alt="billing" className="relative z-[5]  h-auto" />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3 text-white">
      <img src={futuristic2} alt="billing" className="relative z-[5]  h-auto" />
      </div>
  
    </div>        
    <div className={`flex flex-row w-full gap-20 custom-positioning`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    <div className="flex justify-center w-full">
  <Button  />
    </div>
    
    </div>


  </section> */
);

export default Business;