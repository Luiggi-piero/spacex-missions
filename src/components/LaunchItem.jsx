import { Box, Flex, Spacer, Tag, Text, Icon, Button } from "@chakra-ui/react"
import dayjs from "dayjs"
import { CiCalendar } from "react-icons/ci"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const LaunchItem = ({ launch }) => {

    return (
        <Box
            bg='gray.100'
            p={4}
            m={4}
            borderRadius='lg'
        >
            <Flex display='flex'>
                <Text fontSize='2xl'>
                    {/* eslint-disable-next-line react/prop-types */}
                    Mission <strong> {launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag
                    p={2}
                    //   eslint-disable-next-line react/prop-types
                    colorScheme={launch.launch_success ? 'green' : 'red'}
                >
                    {/* eslint-disable-next-line react/prop-types */}
                    {launch.launch_success ? 'Success' : 'Failure'}
                </Tag>
            </Flex>

            <Flex align='center'>
                <Icon as={CiCalendar} color='gray.500' />
                <Text fontSize='sm' ml={1} color='gray.500'>
                    {
                        // eslint-disable-next-line react/prop-types
                        dayjs(launch.launch_date_local)
                            .locale('es')
                            .format('D MMMM, YYYY')
                    }
                </Text>
            </Flex>

            <Link
                // eslint-disable-next-line react/prop-types
                to={`/launch/${launch.flight_number}`}
            >
                <Button
                    mt={2}
                    colorScheme="purple">
                    More details
                </Button>
            </Link>
        </Box>
    )
}
