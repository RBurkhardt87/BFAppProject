package BFAppProject.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;

import java.time.LocalDate;
import java.util.Date;

@Entity
public class SleepLogEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateCreated;

    @PrePersist
    protected void onCreate() {
        this.dateCreated = LocalDate.now();
    }

    @NotNull(message = "Must enter a date")
    @Past(message = "This is a future date, please try again")
    private Date date;

    @NotBlank(message = "You must pick a start time")
    private String startTime;

    @NotBlank(message = "You must pick a stop time")
    private String stopTime;

    private String sleepQuality;
    private String sleepType;
    private String mood;
    private String sleepPosition;
    private Boolean swaddled;
    private String swaddleType;
    private Boolean crying;
    private String cryingNotes;
    private Boolean sleepAssociations;
    private String associationType;


    public SleepLogEntry() {
    }

    public SleepLogEntry(Date date, String startTime, String stopTime, String sleepQuality,
                         String sleepType, String mood, String sleepPosition, Boolean swaddled, String swaddleType,
                         Boolean crying, String cryingNotes, Boolean sleepAssociations, String associationType) {
        this.dateCreated = LocalDate.now();
        this.date = date;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.sleepQuality = sleepQuality;
        this.sleepType = sleepType;
        this.mood = mood;
        this.sleepPosition = sleepPosition;
        this.swaddled = swaddled;
        this.swaddleType = swaddleType;
        this.crying = crying;
        this.cryingNotes = cryingNotes;
        this.sleepAssociations = sleepAssociations;
        this.associationType = associationType;
    }



    public Long getId() {
        return id;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getStopTime() {
        return stopTime;
    }

    public void setStopTime(String stopTime) {
        this.stopTime = stopTime;
    }

    public String getSleepQuality() {
        return sleepQuality;
    }

    public void setSleepQuality(String sleepQuality) {
        this.sleepQuality = sleepQuality;
    }

    public String getSleepType() {
        return sleepType;
    }

    public void setSleepType(String sleepType) {
        this.sleepType = sleepType;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public String getSleepPosition() {
        return sleepPosition;
    }

    public void setSleepPosition(String sleepPosition) {
        this.sleepPosition = sleepPosition;
    }

    public Boolean getSwaddled() {
        return swaddled;
    }

    public void setSwaddled(Boolean swaddled) {
        this.swaddled = swaddled;
    }

    public String getSwaddleType() {
        return swaddleType;
    }

    public void setSwaddleType(String swaddleType) {
        this.swaddleType = swaddleType;
    }

    public Boolean getCrying() {
        return crying;
    }

    public void setCrying(Boolean crying) {
        this.crying = crying;
    }

    public String getCryingNotes() {
        return cryingNotes;
    }

    public void setCryingNotes(String cryingNotes) {
        this.cryingNotes = cryingNotes;
    }

    public Boolean getSleepAssociations() {
        return sleepAssociations;
    }

    public void setSleepAssociations(Boolean sleepAssociations) {
        this.sleepAssociations = sleepAssociations;
    }

    public String getAssociationType() {
        return associationType;
    }

    public void setAssociationType(String associationType) {
        this.associationType = associationType;
    }


}
