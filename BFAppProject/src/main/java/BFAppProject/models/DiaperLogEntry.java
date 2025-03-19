package BFAppProject.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

@Entity
public class DiaperLogEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "You must pick a date")
    private Date date;

    @NotBlank(message = "You must pick a time")
    private String time;

    private Boolean pooped;
    private String poopType;
    private String poopAmount;
    private Boolean urinated;
    private String urineType;
    private String urineAmount;
    private Boolean blowout;
    private String diaperSize;
    private String diaperBrand;
    private Boolean diaperRash;
    private String rashSigns;
    private String note;

    public DiaperLogEntry() {
    }

    public DiaperLogEntry(Date date, String time, Boolean pooped, String poopType, String poopAmount,
                          Boolean urinated, String urineType, String urineAmount, Boolean blowout,
                          String diaperSize, String diaperBrand, Boolean diaperRash, String rashSigns, String note) {
        this.date = date;
        this.time = time;
        this.pooped = pooped;
        this.poopType = poopType;
        this.poopAmount = poopAmount;
        this.urinated = urinated;
        this.urineType = urineType;
        this.urineAmount = urineAmount;
        this.blowout = blowout;
        this.diaperSize = diaperSize;
        this.diaperBrand = diaperBrand;
        this.diaperRash = diaperRash;
        this.rashSigns = rashSigns;
        this.note = note;
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Boolean getPooped() {
        return pooped;
    }

    public void setPooped(Boolean pooped) {
        this.pooped = pooped;
    }

    public String getPoopType() {
        return poopType;
    }

    public void setPoopType(String poopType) {
        this.poopType = poopType;
    }

    public String getPoopAmount() {
        return poopAmount;
    }

    public void setPoopAmount(String poopAmount) {
        this.poopAmount = poopAmount;
    }

    public Boolean getUrinated() {
        return urinated;
    }

    public void setUrinated(Boolean urinated) {
        this.urinated = urinated;
    }

    public String getUrineType() {
        return urineType;
    }

    public void setUrineType(String urineType) {
        this.urineType = urineType;
    }

    public String getUrineAmount() {
        return urineAmount;
    }

    public void setUrineAmount(String urineAmount) {
        this.urineAmount = urineAmount;
    }

    public Boolean getBlowout() {
        return blowout;
    }

    public void setBlowout(Boolean blowout) {
        this.blowout = blowout;
    }

    public String getDiaperSize() {
        return diaperSize;
    }

    public void setDiaperSize(String diaperSize) {
        this.diaperSize = diaperSize;
    }

    public String getDiaperBrand() {
        return diaperBrand;
    }

    public void setDiaperBrand(String diaperBrand) {
        this.diaperBrand = diaperBrand;
    }

    public Boolean getDiaperRash() {
        return diaperRash;
    }

    public void setDiaperRash(Boolean diaperRash) {
        this.diaperRash = diaperRash;
    }

    public String getRashSigns() {
        return rashSigns;
    }

    public void setRashSigns(String rashSigns) {
        this.rashSigns = rashSigns;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }


}
