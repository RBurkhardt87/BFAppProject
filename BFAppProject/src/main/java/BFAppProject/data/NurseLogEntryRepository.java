package BFAppProject.data;

import BFAppProject.models.NurseLogEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NurseLogEntryRepository extends JpaRepository<NurseLogEntry, Long> {

}
