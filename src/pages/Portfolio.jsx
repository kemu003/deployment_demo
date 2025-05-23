import React from 'react';

const team = [
  {
    name: 'Mr. RAPHAEL BETT',
    role: 'DIRECTOR',
    imageUrl: '/DIR.jpg',
    bio: 'Raphael Bett, the sole director of Raphstar Investment Co. Ltd, is a registered member of the National Council for Persons with Disabilities (NCPWD). He was certified on 9th August 2024 with a physical disability (amputation) acquired in early childhood. His leadership reflects the company’s commitment to resilience and inclusivity.',
  },
   {
    name: 'Mr.DENNIS TIONY',
    role: 'SECRETARY',
    imageUrl: '/LK.jpg',
    bio: 'Denis Tiony is responsible for ensuring the company complies with legal and regulatory requirements. He manages official records, facilitates communication between the board and stakeholders, and supports governance by preparing meeting agendas, minutes, and corporate filings.',
  },
  {
    name: 'Mr. HILLARY MALEL',
    role: 'CSR & PROGRAMS EXPERT',
    imageUrl: '/CSR.jpg',
    bio: 'An accomplished CSR and Programs Expert and a Certified ILO Trainer, Mr. Hillary Malel is an accomplished CSR and Programs Expert with  experience in enterprise development, financial inclusion, and social impact program implementation. His work focuses on designing and executing sustainable community-driven initiatives, including women and youth empowerment, green enterprise solutions, and public-private partnerships.',
  },
  {
    name: 'Mr. KIPNGENO DOMINIC',
    role: 'ELECTRICAL ENGINEER',
    imageUrl: '/EL.jpg',
    bio: 'Mr. Kipngeno Dominic has over 10 years of experience in electrical engineering, having worked with Ezeetec, Metha Electrical, and CP Solar Resources. He currently contributes his expertise to Raphstar Investment Co. Ltd, delivering effective and innovative electrical solutions.',
  },
  {
    name: 'Mr. KIPRONO ROTICH BENARD',
    role: 'PROCUREMENT OFFICER',
    imageUrl: '/PR.jpg',
    bio: 'Mr. Kiprono Rotich Benard plays a key role in driving engineering initiatives through innovative procurement solutions. He leads the sourcing and acquisition of materials and services, ensuring the timely and cost-effective support of the company’s engineering projects.',
  },
  {
    name: 'Mr. NGENO JOASH KIPKORIR',
    role: 'LEGAL PERSONNEL',
    imageUrl: '/LE.jpg',
    bio: 'Mr. Ngeno Joash Kipkorir provides essential legal support and ensures compliance across all projects at the company. His expertise helps safeguard the organization by navigating regulatory requirements and facilitating smooth legal operations, contributing to the successful execution of business activities.',
  },
  {
    name: 'Mrs. ROSESLYNE CHEPKEMOI',
    role: 'SAFETY OFFICER',
    imageUrl: '/SF.jpg',
    bio: 'Roseslyne Chepkemoi serves as the Safety Officer at Raphstar Investment Co. Ltd. She holds a Diploma in Community Health and is responsible for overseeing health and safety practices across all operations. Her expertise ensures compliance with safety standards, promotes a culture of wellness, and safeguards the well-being of both staff and clients on every project.',
  },
  {
    name: 'Mr. ENOCK CHERUYOT KIRUI',
    role: 'PLANT OPERATOR',
    imageUrl: '/EN.jpg',
    bio: 'Mr. Enock Cheruyot Kirui is the Plant Operator at Raphstar Investment Co. Ltd. He is skilled in plant operations and maintenance, ensuring efficient handling and upkeep of machinery essential to the company’s construction and infrastructure projects. His technical expertise contributes significantly to the smooth execution of on-site operations.',
  },
  {
    name: 'Mrs. DORIS CHEPNGETICH',
    role: 'PLANT OPERATOR',
    imageUrl: '/PL.jpg',
    bio: 'Mrs. Doris Chepngetich serves as a Plant Operator at Raphstar Investment Co. Ltd, working alongside the operations team to ensure machinery runs efficiently and safely. She is a specialist in operational excellence and safety protocols, contributing to the company’s commitment to high standards in equipment handling and workplace safety.',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the experienced professionals leading Raphstar Investment Co. Ltd
            towards excellence.
          </p>
        </div>
        <ul
          role="list"
          className="
            mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16
            sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4
          "
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="w-full h-48 sm:h-64 overflow-hidden rounded-lg sm:rounded-2xl">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="
                    w-full h-full
                    object-contain    /* mobile: show whole image */
                    sm:object-cover   /* ≥640px: fill container */
                    object-center
                  "
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-indigo-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
