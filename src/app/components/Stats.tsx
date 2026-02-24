// import React, { useEffect, useRef, useState } from "react";
// import { useInView } from "framer-motion";
// import "../../styles/stats.css";


// interface StatItem {
//   label: string;
//   value: number;
//   suffix?: string;
// }

// const stats: StatItem[] = [
//   { label: "Businesses Registered", value: 50, suffix: "+" },
//   { label: "Client Satisfaction", value: 98, suffix: "%" },
//   { label: "Years Experience", value: 5, suffix: "+" },
// ];

// interface CounterProps {
//   value: number;
//   suffix?: string;
//   duration?: number;
// }

// const Counter: React.FC<CounterProps> = ({
//   value,
//   suffix = "",
//   duration = 2000,
// }) => {
//   const [count, setCount] = useState(1);
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!inView) return;

//     let start = 1;
//     const end = value;
//     const incrementTime = duration / (end - start);

//     let current = start;

//     const timer = setInterval(() => {
//       current++;
//       setCount(current);

//       if (current >= end) {
//         clearInterval(timer);
//       }
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [inView, value, duration]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const Stats: React.FC = () => {
//   return (
//     <section className="stats-section">
//       <div className="stats-container">
//         {stats.map((stat, index) => (
//           <div key={index} className="stat-card">
//             <h2>
//               <Counter value={stat.value} suffix={stat.suffix} />
//             </h2>
//             <p>{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Stats;

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Building2, Users, Award } from "lucide-react";
import "../../styles/stats.css";

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Building2, value: "50+", label: "Businesses Registered" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

interface CounterProps {
  value: string;
}

const Counter = ({ value }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!isInView) return;

    let start = 1;
    const end = numericValue;
    const duration = 2000;
    const stepTime = duration / (end - start);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-black p-3 rounded-lg">
                <stat.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div>
                <div className="text-3xl font-semibold text-black">
                  <Counter value={stat.value} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}