import Image from "next/image";

export function Modes() {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            4 Ways to Elevate Your Interiors: Design in Different Modes!"{" "}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Unlock Your Creative Style with Versatile Interior Design Modes:
            Explore 4 Distinctive Approaches!
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <Image
              height={400}
              width={400}
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://images.unsplash.com/photo-1623625434531-d130448273c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="blog"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Revamp Your Space: Unlock the Power of AI to Redesign Any Interior
              with 40+ Design Styles!{" "}
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              Transform Your Space into Your Dream Vision with Cutting-Edge
              AI-Powered Interior Design.
            </p>
          </div>
          <div className="p-6">
            <Image
              height={400}
              width={400}
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://images.unsplash.com/photo-1605635543237-e9c8c472d09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
              alt="blog"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              From Empty to Elegant: Decorate Your Under-Construction or Empty
              Rooms with Stunning Furniture!{" "}
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              Elevate Your Space with Functional Furniture Arrangements for a
              Stylish and Inviting Atmosphere.
            </p>
          </div>
          <div className="p-6">
            <Image
              height={400}
              width={400}
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl bg-green-500 shadow-lg shadow-cyan-500/50 "
              src="https://plus.unsplash.com/premium_photo-1674480166107-14e50937d4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="blog"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Color Your World: Enhance Your Design with Customized Color
              Schemes and Elements!{" "}
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              Unleash Your Creativity and Elevate Your Space with Fresh Colors
              and Enhanced Design Features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
