import React from 'react'

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">About Us</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-5xl">
            Rapstar Investment Co. Ltd
          </p>

          <div className="mt-6 text-gray-600 text-base leading-7 space-y-4">
            <p>
              Founded with a vision to revolutionize the engineering and investment landscape, Raphstar Investment Co. Ltd has been at the forefront of innovation since its inception.
            </p>
            <p>
              <strong>RAPSTAR INVESTMENT COMPANY LIMITED</strong>, registered under Company Number <strong>PVT-7LUQMMK</strong> on 16th September 2019, is a private limited company with a nominal share capital of KES 100,000 divided into 1,000 ordinary shares valued at KES 100 each.
            </p>
            <p>
              The sole director and shareholder is <strong>Raphael Bett</strong>, a Kenyan national, holding all 1,000 shares. The company’s registered office is located at Jamaa Plaza, Bomet Sotik Road, Plot No. 150, Kapsee Estate, House No. 6, in Bomet, Kenya, with a postal address of P.O. Box 331, Bomet.
            </p>
            <p>
              Contact details include telephone number <strong>+254724929080</strong> and email <strong>ralphbett4777@gmail.com</strong>. As of 6th June 2024, there are no encumbrances registered against the company, and the information is drawn from the official records of the Companies Registry under reference number <strong>OS-A7FZ9VL3</strong>.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Our Mission</dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                To deliver exceptional construction services and reliable building materials through excellence in project management, integrity, safety, and customer satisfaction, while promoting environmental responsibility and long-term partnerships.
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Our Vision</dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                To be a leading provider of innovative, sustainable, and high-quality construction solutions and building supplies, transforming communities and enhancing infrastructure development across the region.
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Our Values</dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Excellence, Integrity, Innovation, and Collaboration guide everything we do at Raphstar Investment.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}