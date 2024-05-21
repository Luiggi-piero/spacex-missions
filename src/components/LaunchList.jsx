import { useEffect, useState } from "react"
import { Heading } from "@chakra-ui/react"
import { LaunchItem } from "./LaunchItem"
import * as API from '../services/launches';

// eslint-disable-next-line react/prop-types
export const LaunchList = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
            .catch(console.log)
    }, [])

    return (
        <>
            <Heading as='h1' size='lg' m={4}>
                SpaceX Launches
            </Heading>
            {
                launches.length === 0
                    ? <div>Loading...</div>
                    : (
                        <section>
                            {
                                // eslint-disable-next-line react/prop-types
                                launches.map(launch => (
                                    <LaunchItem
                                        key={launch.flight_number}
                                        launch={launch}
                                    />
                                ))
                            }
                        </section>
                    )
            }
        </>
    )
}
