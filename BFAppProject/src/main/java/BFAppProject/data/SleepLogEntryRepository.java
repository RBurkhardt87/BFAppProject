package BFAppProject.data;

import BFAppProject.models.SleepLogEntry;
import BFAppProject.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SleepLogEntryRepository extends JpaRepository<SleepLogEntry, Long> {

//    Optional<SleepLogEntry> findBySleepLogId(Long id);

}
