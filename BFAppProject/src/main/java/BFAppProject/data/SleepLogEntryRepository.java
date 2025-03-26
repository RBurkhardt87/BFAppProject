package BFAppProject.data;

import BFAppProject.models.SleepLogEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SleepLogEntryRepository extends JpaRepository<SleepLogEntry, Long> {



}
