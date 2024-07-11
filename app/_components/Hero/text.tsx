<section>
<div className="grid grid-cols-2 gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
  {/* Hero Image */}
  <div className="relative h-80 col-span-2 overflow-hidden rounded-lg sm:h-96 lg:col-span-1 lg:order-last lg:h-full">
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
        }}
        className="absolute inset-0"
      >
        <Image
          alt="slide image"
          src={SlidesData[imageIndex].image}
          width={800}
          height={800}
          className="h-full w-full rounded-3xl object-cover"
          priority
        />
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Hero Body */}
  <div className="p-0 col-span-2 flex flex-col space-y-8 text-center lg:col-span-1 lg:py-24 lg:text-start">
    {/* Body Heading */}
    <h2 className="text-3xl font-bold sm:text-4xl uppercase">
      {SlidesData[imageIndex].heading}
    </h2>

    {/* Body Paragraph */}
    <p className="mt-4 text-md text-gray-600">
      {SlidesData[imageIndex].paragraph}
    </p>

    {/* Body Button */}
    <Button>explore more</Button>
  </div>
</div>

{/* Pagination controls */}
<div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
  <button onClick={() => paginate(-1)}>←</button>
  <button onClick={() => paginate(1)}>→</button>
</div>
</section>