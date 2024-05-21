import { useParams } from 'react-router-dom';
import * as API from '../services/rockets';
import { useEffect, useState } from 'react';
import { Badge, Box, Flex, Image, Spacer, Tag, Text } from '@chakra-ui/react';

export const RocketDetails = () => {

  const { rocketId } = useParams()
  const [rocket, setRocket] = useState({})

  useEffect(() => {
    API.getRocketById(rocketId)
      .then(setRocket)
      .catch(console.error)
  }, [rocketId])

  return (
    <Box display='flex' justifyContent='center'>
      <Box
        bg='gray.100'
        p={4}
        m={4}
        borderRadius='lg'
        w='60%'
      >
        {
          !rocket
            ? 'Loading...'
            : (
              <>
                <Box m={5} display='flex' justifyContent='space-between' alignItems='flex-start'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {/* eslint-disable-next-line react/prop-types */}
                    {`Height ${rocket?.height?.meters} meters`}
                  </Badge>
                  <Image
                    borderRadius='full'
                    boxSize='300px'
                    src={rocket?.flickr_images?.length ? rocket.flickr_images[0] : 'https://placehold.co/300'}
                    alt='Rocket image'
                  />
                  <Tag
                    p={2}
                    colorScheme='blue'
                  >
                    {/* eslint-disable-next-line react/prop-types */}
                    {`Diameter ${rocket?.diameter?.meters} meters`}
                  </Tag>
                </Box>
                <Flex display='flex' mb={2}>
                  <Text fontSize='2xl'>
                    {/* eslint-disable-next-line react/prop-types */}
                    Name <strong> {rocket.rocket_name}</strong> ({rocket.country})
                  </Text>
                  <Spacer />
                  <Tag
                    p={2}
                    colorScheme='green'
                  >
                    {/* eslint-disable-next-line react/prop-types */}
                    {`${rocket?.mass?.kg} kg`}
                  </Tag>
                </Flex>
                <Flex display='flex'>
                  <Text fontSize='medium'>
                    {/* eslint-disable-next-line react/prop-types */}
                    <strong> Description </strong> {rocket.description}
                  </Text>
                </Flex>
              </>
            )
        }
      </Box>
    </Box>
  )
}
