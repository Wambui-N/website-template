"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const hero = () => {
  return (
    <section className="relative pb-12 pt-24 responsive lg:h-screen">
      <div className="">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Healthcare, Your Voice
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join a supportive community sharing real healthcare experiences.
                Your story matters.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                variant="default"
                className="bg-black hover:bg-black text-white"
                href="/signup"
                title="Join the Community"
                icon={<ArrowRight className="ml-2 h-4 w-4" />}
              />

              <Button href="/knowledge-hub" variant="outline" title="Read Stories" />
            </div>
          </motion.div>
          <motion.div
            className="mx-auto aspect-video w-full h-full max-w-[600px] overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://images.nappy.co/photo/wz7wfLFjMDIZkMObjnTQR.jpg?h=750&w=1260&cs=srgb&fm=jpg"
              width={500}
              height={500}
              alt="Community illustration"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default hero;
