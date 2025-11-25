import React from 'react';

const PulseDot = () => {
  return (
    <>
      <style>{`
        @keyframes opacity-animation {
          0% { opacity: 0; }
        }

        @keyframes pulse-animation {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
          }
          70% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3);
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
        }

        .pulse {
          position: relative;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 100%;
          animation: opacity-animation 1s linear;
        }

        .pulse::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: #f9e9a2;
          border-radius: 100%;
          opacity: 0.5;
          transform: translate(-50%, -50%) scale(3);
          animation: pulse-animation 2s infinite;
        }

        .green {
          background: #00e600;
        }

        .red {
          background: #e60000;
        }

        .orange {
          background: #ff9900;
        }
      `}</style>

      <span className="pulse green" />
    </>
  );
};

export default PulseDot;
