package org.example.backend.repository;

import org.example.backend.entity.Performer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerformerRepository extends JpaRepository<Performer,Long> {
}
