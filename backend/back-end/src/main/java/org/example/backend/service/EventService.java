package org.example.backend.service;

import lombok.AllArgsConstructor;
import org.example.backend.entity.Event;
import org.example.backend.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EventService {
    public EventRepository eventRepository;
    public Event addEvent(Event event){
        eventRepository.save(event);
        return event;
    }
    public List<Event> getEvents(){
        List<Event> events=eventRepository.findAll();
        return events;
    }
    public Optional<Event> getEventById(long id){
        Optional<Event> event=eventRepository.findById(id);
        return event;
    }
}
