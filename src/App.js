import React from 'react';
import { Container, Heading } from '@chakra-ui/layout';
import { AddTask } from './components/AddTask';
import { ListTask } from './components/ListTask';
import { Filter } from './components/Filter';
import "./content.css";

function App() {
  return (
    <div className='container'>
      <Container maxW="container.sm">
        <Heading my="4" className="title889">
          Todo list
        </Heading>
        <AddTask />
        <ListTask />
        <Filter />
      </Container>
    </div>
  );
}

export default App;
