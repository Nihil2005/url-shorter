import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longurl, setLongurl] = useState();
  const navigate = useNavigate();
  const handleshorter = (e) => {
    e.preventDefault();
    if (longurl) navigate(`/auth?createNew=${longurl}`);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-16 text-3xl sm:text-6xl lg:text-7xl">
        The Only URL Shorter <br /> You Need!
      </h2>
      <form
        onSubmit={handleshorter}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longurl}
          placeholder="Enter your long Url"
          onChange={(e) => setLongurl(e.target.value)}
          className="h-full flex-1 py-4 px-4 rounded-2xl"
        />
        <Button
          className="bg-red-700 p-8 rounded-full"
          type="submit"
          variant="destructive"
        >
          Shorten!
        </Button>
      </form>
      <img
        className="mt-7"
        src="https://www.shutterstock.com/shutterstock/photos/2275148213/display_1500/stock-vector-naive-playful-abstract-shapes-sticker-pack-groovy-circle-oval-rectangle-arch-eyes-typography-in-2275148213.jpg"
        alt="kk"
      />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
