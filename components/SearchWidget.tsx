"use client"
import {
  Box,
  Flex,
  Text,
  Button,
  Popover,
  Portal,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { addDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import MyDateRange from "./MyDateRange";

/* ------------------ Dummy State Data ------------------ */
const STATES = [
  "Goa",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Telangana",
  "Delhi",
];

/* ------------------ Reusable InputBox ------------------ */
const InputBox = ({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick?: () => void;
}) => (
  <Box
    flex="1"
    bg="white"
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
    px={4}
    py={3}
    cursor={onClick ? "pointer" : "default"}
    onClick={onClick}
  >
    <Text fontSize="xs" color="muted.500">
      {label}
    </Text>
    <Text fontWeight="600">{value}</Text>
  </Box>
);

const SearchWidget = () => {
  /* ------------------ State ------------------ */
  const [selectedState, setSelectedState] = useState("Goa");
  const [openCalendar, setOpenCalendar] = useState(false);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const calendarRef = useRef<HTMLDivElement>(null);

  /* ------------------ Close calendar on outside click ------------------ */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setOpenCalendar(false);
      }
    };

    if (openCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCalendar]);

  /* ------------------ Search Handler ------------------ */
  const handleSearch = () => {
    console.log({
      state: selectedState,
      startDate: dates[0].startDate,
      endDate: dates[0].endDate,
      guests,
    });
  };

  return (
    <Box
      maxW="1100px"
      mx="auto"
      px={4}
      mt={{ base: 4, md: "-60px" }}
      position="relative"
      zIndex={10}
    >
      <Box bg="white" borderRadius="lg" boxShadow="lg" p={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={3}
          align="stretch"
        >
          {/* ------------------ State Selector ------------------ */}
          <Popover.Root>
            <Popover.Trigger asChild>
              <Box>
                <InputBox
                  label="Where are you going?"
                  value={selectedState}
                />
              </Box>
            </Popover.Trigger>

            <Portal>
              <Popover.Positioner>
                <Popover.Content w="220px">
                  <Popover.Body>
                    <Stack gap={2}>
                      {STATES.map((state) => (
                        <Text
                          key={state}
                          cursor="pointer"
                          _hover={{ bg: "gray.100" }}
                          px={2}
                          py={1}
                          borderRadius="sm"
                          onClick={() => {
                            setSelectedState(state);
                            console.log("Selected State:", state);
                          }}
                        >
                          {state}
                        </Text>
                      ))}
                    </Stack>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          {/* ------------------ Date Selector ------------------ */}
          <Box position="relative" flex="1">
            <InputBox
              label="Check-in — Check-out"
              value={`${dates[0].startDate.toDateString()} – ${dates[0].endDate.toDateString()}`}
              onClick={() => setOpenCalendar(true)}
            />

            {openCalendar && (
              <Box
                ref={calendarRef}
                position="absolute"
                mt={2}
                zIndex={20}
              >
                {/* <DateRange
                  editableDateInputs
                  onChange={(item: any) => {
                    setDates([item.selection]);

                    // close calendar when both dates selected
                    if (
                      item.selection.startDate &&
                      item.selection.endDate &&
                      item.selection.startDate !==
                      item.selection.endDate
                    ) {
                      setOpenCalendar(false);
                    }
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  minDate={new Date()}
                /> */}
                <MyDateRange/>
              </Box>
            )}
          </Box>

          {/* ------------------ Guests Selector ------------------ */}
          <Popover.Root>
            <Popover.Trigger asChild>
              <Box>
                <InputBox
                  label="Guests & Rooms"
                  value={`${guests.adults} adults · ${guests.children} children · ${guests.rooms} room`}
                />
              </Box>
            </Popover.Trigger>

            <Portal>
              <Popover.Positioner>
                <Popover.Content w="250px">
                  <Popover.Body>
                    {(["adults", "children", "rooms"] as const).map(
                      (key) => (
                        <Flex
                          key={key}
                          justify="space-between"
                          align="center"
                          mb={3}
                        >
                          <Text textTransform="capitalize">
                            {key}
                          </Text>
                          <Flex gap={2} align="center">
                            <IconButton
                              bg={'primary.500'}
                              size="sm"
                              aria-label="decrease"
                              onClick={() =>
                                setGuests((prev) => ({
                                  ...prev,
                                  [key]:
                                    prev[key] > 0
                                      ? prev[key] - 1
                                      : 0,
                                }))
                              }
                            >
                              -
                            </IconButton>

                            <Text>{guests[key]}</Text>

                            <IconButton
                              bg={'primary.500'}
                              size="sm"
                              aria-label="increase"
                              onClick={() =>
                                setGuests((prev) => ({
                                  ...prev,
                                  [key]: prev[key] + 1,
                                }))
                              }
                            >
                              +
                            </IconButton>
                          </Flex>
                        </Flex>
                      )
                    )}
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          {/* ------------------ Search Button ------------------ */}
          <Button
            bg="primary.500"
            color="white"
            px={8}
            py={6}
            w={{ base: "100%", md: "auto" }}
            alignSelf={'center'}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default SearchWidget;