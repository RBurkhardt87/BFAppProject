package BFAppProject.services;

import BFAppProject.data.SleepLogEntryRepository;
import BFAppProject.dto.SleepLogEntryDTO;
import BFAppProject.models.SleepLogEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SleepLogEntryService {

    @Autowired
    private final SleepLogEntryRepository sleepLogEntryRepository;

    public SleepLogEntryService(SleepLogEntryRepository sleepLogEntryRepository) {
        this.sleepLogEntryRepository = sleepLogEntryRepository;
    }


    public SleepLogEntry saveSleepLog(SleepLogEntryDTO sleepLogEntryDTO) {

        SleepLogEntry sleepLogEntry = new SleepLogEntry(
                sleepLogEntryDTO.getDate(),
                sleepLogEntryDTO.getStartTime(),
                sleepLogEntryDTO.getStopTime(),
                sleepLogEntryDTO.getSleepQuality(),
                sleepLogEntryDTO.getSleepType(),
                sleepLogEntryDTO.getMood(),
                sleepLogEntryDTO.getSleepPosition(),
                sleepLogEntryDTO.getSwaddled(),
                sleepLogEntryDTO.getSwaddleType(),
                sleepLogEntryDTO.getCrying(),
                sleepLogEntryDTO.getCryingNotes(),
                sleepLogEntryDTO.getSleepAssociations(),
                sleepLogEntryDTO.getAssociationType()
        );

        return sleepLogEntryRepository.save(sleepLogEntry);
    }


    public SleepLogEntryDTO convertToDTO(SleepLogEntry sleepLogEntry) {
        return new SleepLogEntryDTO(
                sleepLogEntry.getId(),
                sleepLogEntry.getDateCreated(),
                sleepLogEntry.getDate(),
                sleepLogEntry.getStartTime(),
                sleepLogEntry.getStopTime(),
                sleepLogEntry.getSleepQuality(),
                sleepLogEntry.getSleepType(),
                sleepLogEntry.getMood(),
                sleepLogEntry.getSleepPosition(),
                sleepLogEntry.getSwaddled(),
                sleepLogEntry.getSwaddleType(),
                sleepLogEntry.getCrying(),
                sleepLogEntry.getCryingNotes(),
                sleepLogEntry.getSleepAssociations(),
                sleepLogEntry.getAssociationType()
        );
    }

}
