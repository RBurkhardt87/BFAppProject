package BFAppProject.dto;

import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public class NurseLogEntryDTO {

    private Long id;

    private final LocalDate dateCreated;

    @NotNull(message = "You must pick a date")
    private Date date;
    private Boolean leftSide;

    @NotBlank(message = "You must pick a start time")
    private String leftStartTime;

    @NotBlank(message = "You must pick a stop time")
    private String leftStopTime;
    private Boolean rightSide;

    @NotBlank(message = "You pick a start time")
    private String rightStartTime;

    @NotBlank(message = "You must pick a stop time")
    private String rightStopTime;

    @NotEmpty(message = "Please pick at least one position")
    private List<String> leftSidePositions;

    @NotEmpty(message = "Please pick at least one position")
    private List<String> rightSidePositions;

    private String nippleShape;
    private String nippleColoring;
    private Boolean isHardSpot;
    private Boolean isBreastRedness;
    private Boolean isBreastSoft;
    private Boolean isBreastPain;
    private String maternalNotes;
    private Boolean isClickingPresent;
    private Boolean isInfantSputtering;
    private Boolean isActiveFeeding;
    private Boolean isInfantSleepy;
    private List<String> infantFeedingCues;
    private String infantNotes;
    private String sessionNotes;


    public NurseLogEntryDTO(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }


    public NurseLogEntryDTO(Long id, Date date, LocalDate dateCreated, Boolean leftSide, String leftStartTime, String leftStopTime, Boolean rightSide,
                         String rightStartTime, String rightStopTime, List<String> leftSidePositions, List<String>
                                 rightSidePositions, String nippleShape, String nippleColoring, Boolean isHardSpot,
                         Boolean isBreastRedness, Boolean isBreastSoft, Boolean isBreastPain, String maternalNotes,
                         Boolean isClickingPresent, Boolean isInfantSputtering, Boolean isActiveFeeding, Boolean isInfantSleepy,
                         List<String> infantFeedingCues, String infantNotes, String sessionNotes) {
        this.dateCreated = dateCreated;
        this.date = date;
        this.leftSide = leftSide;
        this.leftStartTime = leftStartTime;
        this.leftStopTime = leftStopTime;
        this.rightSide = rightSide;
        this.rightStartTime = rightStartTime;
        this.rightStopTime = rightStopTime;
        this.leftSidePositions = leftSidePositions;
        this.rightSidePositions = rightSidePositions;
        this.nippleShape = nippleShape;
        this.nippleColoring = nippleColoring;
        this.isHardSpot = isHardSpot;
        this.isBreastRedness = isBreastRedness;
        this.isBreastSoft = isBreastSoft;
        this.isBreastPain = isBreastPain;
        this.maternalNotes = maternalNotes;
        this.isClickingPresent = isClickingPresent;
        this.isInfantSputtering = isInfantSputtering;
        this.isActiveFeeding = isActiveFeeding;
        this.isInfantSleepy = isInfantSleepy;
        this.infantFeedingCues = infantFeedingCues;
        this.infantNotes = infantNotes;
        this.sessionNotes = sessionNotes;
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

    public Boolean getIsLeftSide() {
        return leftSide;
    }

    public void setIsLeftSide(Boolean leftSide) {
        this.leftSide = leftSide;
    }

    public String getLeftStartTime() {
        return leftStartTime;
    }

    public void setLeftStartTime(String leftStartTime) {
        this.leftStartTime = leftStartTime;
    }

    public String getLeftStopTime() {
        return leftStopTime;
    }

    public void setLeftStopTime(String leftStopTime) {
        this.leftStopTime = leftStopTime;
    }

    public Boolean getIsRightSide() {
        return rightSide;
    }

    public void setIsRightSide(Boolean rightSide) {
        this.rightSide = rightSide;
    }

    public String getRightStartTime() {
        return rightStartTime;
    }

    public void setRightStartTime(String rightStartTime) {
        this.rightStartTime = rightStartTime;
    }

    public String getRightStopTime() {
        return rightStopTime;
    }

    public void setRightStopTime(String rightStopTime) {
        this.rightStopTime = rightStopTime;
    }

    public List<String> getLeftSidePositions() {
        return leftSidePositions;
    }

    public void setLeftSidePositions(List<String> leftSidePositions) {
        this.leftSidePositions = leftSidePositions;
    }

    public List<String> getRightSidePositions() {
        return rightSidePositions;
    }

    public void setRightSidePositions(List<String> rightSidePositions) {
        this.rightSidePositions = rightSidePositions;
    }

    public String getNippleShape() {
        return nippleShape;
    }

    public void setNippleShape(String nippleShape) {
        this.nippleShape = nippleShape;
    }

    public String getNippleColoring() {
        return nippleColoring;
    }

    public void setNippleColoring(String nippleColoring) {
        this.nippleColoring = nippleColoring;
    }

    public Boolean getIsHardSpot() {
        return isHardSpot;
    }

    public void setIsHardSpot(Boolean hardSpot) {
        isHardSpot = hardSpot;
    }

    public Boolean getIsBreastRedness() {
        return isBreastRedness;
    }

    public void setIsBreastRedness(Boolean breastRedness) {
        isBreastRedness = breastRedness;
    }

    public Boolean getIsBreastSoft() {
        return isBreastSoft;
    }

    public void setIsBreastSoft(Boolean breastSoft) {
        isBreastSoft = breastSoft;
    }

    public Boolean getIsBreastPain() {
        return isBreastPain;
    }

    public void setIsBreastPain(Boolean breastPain) {
        isBreastPain = breastPain;
    }

    public String getMaternalNotes() {
        return maternalNotes;
    }

    public void setMaternalNotes(String maternalNotes) {
        this.maternalNotes = maternalNotes;
    }

    public Boolean getIsClickingPresent() {
        return isClickingPresent;
    }

    public void setIsClickingPresent(Boolean clickingPresent) {
        isClickingPresent = clickingPresent;
    }

    public Boolean getIsInfantSputtering() {
        return isInfantSputtering;
    }

    public void setIsInfantSputtering(Boolean infantSputtering) {
        isInfantSputtering = infantSputtering;
    }

    public Boolean getIsActiveFeeding() {
        return isActiveFeeding;
    }

    public void setIsActiveFeeding(Boolean activeFeeding) {
        isActiveFeeding = activeFeeding;
    }

    public Boolean getIsInfantSleepy() {
        return isInfantSleepy;
    }

    public void setIsInfantSleepy(Boolean infantSleepy) {
        isInfantSleepy = infantSleepy;
    }

    public List<String> getInfantFeedingCues() {
        return infantFeedingCues;
    }

    public void setInfantFeedingCues(List<String> infantFeedingCues) {
        this.infantFeedingCues = infantFeedingCues;
    }

    public String getInfantNotes() {
        return infantNotes;
    }

    public void setInfantNotes(String infantNotes) {
        this.infantNotes = infantNotes;
    }

    public String getSessionNotes() {
        return sessionNotes;
    }

    public void setSessionNotes(String sessionNotes) {
        this.sessionNotes = sessionNotes;
    }


}
