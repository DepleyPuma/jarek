package org.example.backend.service;

import lombok.AllArgsConstructor;
import org.example.backend.entity.Event;
import org.example.backend.repository.EventRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EventService {
    public EventRepository eventRepository;
    public Event addEvent(Event event){
        eventRepository.save(event);
        return event;
    }
}
