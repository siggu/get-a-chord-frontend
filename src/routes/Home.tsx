import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getChords} from '../api';
import {Box, Text, Spinner, Center, Image} from '@chakra-ui/react';

export default function Home() {
  const {data: chords, isLoading: isChordsLoading} = useQuery({
    queryKey: ['chords'],
    queryFn: getChords,
  });

  console.log(chords);

  return (
    <Box>
      <Text color={'black'}>
        {chords?.map((chord: any) => (
          <>
            <Text key={chord.id}>{chord.name}</Text>
            <Image key={chord.id} src={chord.imageUrl} />
          </>
        ))}
      </Text>
    </Box>
  );
}
