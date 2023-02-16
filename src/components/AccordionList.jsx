import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from "@chakra-ui/react";

const AccordionList = () => {
  return (
    <div className="accordion bg-black ">
      <div className="container  ">
        <Accordion allowToggle>
          <AccordionItem
            borderWidth={0}
            borderColor="gray"
            style={{ borderBottomWidth: 1, padding: "20px 0" }}
          >
            <h2 className="text-white title">
              <Flex align="center">
                <p>01</p>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    borderColor="yellow.200"
                  >
                    Workout at Home
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Flex>
            </h2>
            <AccordionPanel pb={4} color="white" fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            borderWidth={0}
            borderColor="gray"
            style={{ borderBottomWidth: 1, padding: "20px 0" }}
          >
            <h2 className="text-white title">
              <Flex align="center">
                <p>02</p>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    borderColor="yellow.200"
                  >
                    Stay Strong and Fit
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Flex>
            </h2>
            <AccordionPanel pb={4} color="white" fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderWidth={0}
            borderColor="gray"
            style={{ borderBottomWidth: 1, padding: "20px 0" }}
          >
            <h2 className="text-white title">
              <Flex align="center">
                <p>03</p>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    borderColor="yellow.200"
                  >
                    High Intensity
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Flex>
            </h2>
            <AccordionPanel pb={4} color="white" fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderWidth={0}
            borderColor="gray"
            style={{ borderBottomWidth: 1, padding: "20px 0" }}
          >
            <h2 className="text-white title">
              <Flex align="center">
                <p>04</p>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    borderColor="yellow.200"
                  >
                    Simple Workout
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Flex>
            </h2>
            <AccordionPanel pb={4} color="white" fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderWidth={0}
            borderColor="gray"
            style={{ borderBottomWidth: 1, padding: "20px 0" }}
          >
            <h2 className="text-white title">
              <Flex align="center">
                <p>05</p>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    borderColor="yellow.200"
                  >
                    Burn Calories
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Flex>
            </h2>
            <AccordionPanel pb={4} color="white" fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionList;
