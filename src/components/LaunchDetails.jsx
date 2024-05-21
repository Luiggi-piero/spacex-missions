import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as API from '../services/launches';

export const LaunchDetails = () => {

    // Escucha los parametros de la ruta
    const { launchId } = useParams()
    const [launch, setLaunch] = useState({})

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.error)
    }, [launchId])

    return (
        // eslint-disable-next-line react/prop-types
        <Box
            bg='gray.100'
            p={4}
            m={4}
            borderRadius='lg'
        >
            {
                !launch.mission_name
                    ? 'Loading...'
                    : (
                        <>
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
                            <Box>
                                Rocket: {' '}
                                <a>
                                    <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                                        {launch.rocket?.rocket_name}
                                    </Link>
                                </a>
                            </Box>
                        </>
                    )
            }
        </Box>
    )
}
