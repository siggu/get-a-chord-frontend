import {QueryFunctionContext} from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});

export const getChords = () => instance.get('chords/').then((response) => response.data);

export const getChord = ({queryKey}: QueryFunctionContext<[string, string]>) => {
  const [_, chordId] = queryKey;
  return instance.get(`chords/${chordId}`).then((response) => response.data);
};
