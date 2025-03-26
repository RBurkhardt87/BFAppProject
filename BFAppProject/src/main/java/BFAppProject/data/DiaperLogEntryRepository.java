package BFAppProject.data;

import BFAppProject.models.DiaperLogEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DiaperLogEntryRepository extends JpaRepository<DiaperLogEntry, Long> {



}

