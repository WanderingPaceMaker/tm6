# Calculation methods

*English · [Français](METHODES.md)*

This page describes every value computed by TM6: its formula, the data it uses, the reason for the choice and the source. It follows the app code (`index.html`); if they disagree, the code prevails and this page must be corrected.

All measurements come from the assessor's input: SpO2 and heart rate (HR) read on the oximeter every minute, at the end of the test, during stops and during recovery; time of each passage at a cone; distance of the final partial length. The app receives no continuous oximeter recording. Calculations are redone after every change, and a value whose data are missing is not shown.

The label **Clinical choice** below marks a rule decided by the physician responsible for the app, not taken from a publication.

## Standards followed

The conduct of the test (instructions, encouragement, stops, SpO2 alert) and the definition of the measurements follow the ERS/ATS technical standard of 2014, which prevails over the ATS statement of 2002 where the two texts differ:

- Holland AE, Spruit MA, Troosters T, et al. An official European Respiratory Society/American Thoracic Society technical standard: field walking tests in chronic respiratory disease. *Eur Respir J* 2014;44:1428-46. doi:10.1183/09031936.00150314
- ATS Committee on Proficiency Standards for Clinical Pulmonary Function Laboratories. ATS statement: guidelines for the six-minute walk test. *Am J Respir Crit Care Med* 2002;166:111-7. doi:10.1164/ajrccm.166.1.at1102

## Distance walked

The distance is the sum of the lengths counted and the metres of the final partial length, as required by the 2014 standard (section *Recording performance of the 6MWT*: number of laps, then the distance of the final partial lap).

> distance = corridor length × number of lengths + partial metres

A length is one passage at a cone. When the patient does not start at a cone (for example from a room halfway along the corridor), the distance *d* between the starting line and the first cone reached is set in the settings. The first length is then worth *d*, and the following ones the corridor length:

> distance = *d* + corridor length × (number of lengths − 1) + partial metres

Until a cone is reached, partial metres are measured from the starting line and cannot exceed *d*. The 2014 standard does not set the position of the starting line. The ATS statement of 2002 placed it at one end of the corridor ("A starting line, which marks the beginning and end of each 60-m lap"), but the 2014 standard, which the app follows, does not repeat this requirement. It does ask that the same course be used from one test to the next in a given patient: this is why the report mentions the start when it is not at a cone.

## Predicted distance and lower limit of normal

TM6 uses the Enright and Sherrill equations, established in 117 healthy men and 173 healthy women aged 40 to 80 years, for subjects taking the test for the first time. Height is in centimetres, weight in kilograms and age in years.

> men: 7.57 × height − 5.02 × age − 1.76 × weight − 309
>
> women: 2.11 × height − 2.29 × weight − 5.78 × age + 667

The lower limit of normal (LLN) is the predicted value minus 153 m in men and 139 m in women. The percentage of predicted is the distance walked divided by the predicted value. Without sex, age, height or weight, no predicted value is shown. Outside 40 to 80 years, the report notes that the age lies outside the reference population.

- Source: Enright PL, Sherrill DL. Reference equations for the six-minute walk in healthy adults. *Am J Respir Crit Care Med* 1998;158:1384-7. doi:10.1164/ajrccm.158.5.9710086. Equations checked in the full text (table 3).
- Checked in the full text (table 3 and results): "subtract 153 m for the LLN" in men, 139 m in women; the LLN is defined there as the 5th percentile. The article states that its equations apply to a patient's first test, and calls for caution outside 40 to 80 years and in non-Caucasian people.
- Why this equation: it is the most widely used. The 2014 standard recommends, where possible, an equation established in the local population; more recent European equations exist, and the choice remains open.

**Interpretation in the summary** (clinical choice): "within normal limits" if the distance reaches the LLN, "reduced" otherwise.

## Walking speed

> overall speed (km/h) = distance ÷ test duration × 3.6
>
> walking speed (km/h) = distance ÷ (test duration − duration of stops) × 3.6

The test duration is 6 minutes, or the time elapsed until the test was stopped. Stops are time-stamped by the assessor; the timer keeps running during stops, as required by the 2014 standard.

The **speed of each length**, plotted on the figure, is the length of that length divided by the walking time between two passages, stops excluded. A length with less than one second of walking is not plotted. The first length counts its actual distance when the start is not at a cone.

## SpO2

- **Lowest SpO2 (nadir)**: the lowest of all values recorded during the test, that is, the reading of each minute, the value at the end of the test, the values taken during stops and the nadir read on the oximeter if entered. The resting value is excluded. The 2014 standard uses the lowest SpO2 recorded during the test and recommends continuous oximetry; here, the value is read and entered by the assessor, so a brief desaturation between two readings may be missed.
- **Fall in SpO2**: resting SpO2 minus nadir, in points.
- **Significant desaturation** (clinical choice): a fall of at least 4 points between rest and nadir, with no condition on the lowest value reached. This threshold is close to that of the BTS ambulatory oxygen assessment protocol (2015: a fall of at least 4% to below 90%), without its 90% limit. It is not the French regulatory criterion for oxygen prescription.
- **Alert**: an entered value below 80% triggers the alert to stop walking; walking may resume once SpO2 recovers to 85% or more (2014 standard, section *Reasons for the assessor to stop an exercise test*).

## Heart rate

- **Highest HR**: the highest of the values recorded during the test (reading of each minute, end of test, stops), excluding the resting value.
- **End-test HR**: the value entered at the end of the test, or failing that the reading of the last minute.
- **Predicted maximum HR** (clinical choice): 220 minus age. The highest HR is expressed as a percentage of this value. This is a convention; it is not taken from a source cited in the app. The summary describes HR without judging it.

## Borg scale

Dyspnoea and fatigue are rated at rest and at the end of the test on the modified Borg scale given by the ATS statement of 2002 (table 2), shown full screen to the patient. The app recalls the baseline rating when the end-of-test rating is taken. No score is computed.

## Exploratory indices

These indices are descriptive. Their reference points were established in specific populations, often a single cohort, and the app draws no conclusion from them. The results screen shows them with their formula and source. The report lists them all in a table, ODDS score included, with the sources in the methods box. An index whose data are missing is not shown.

### ODDS score (validated in idiopathic pulmonary fibrosis only)

The app does not know the diagnosis: the score is computed for any test where its data are present, and is interpretable only in a patient with IPF.

A prognostic score for death or respiratory hospitalisation, out of 100 points, which adds four components:

| Component | Points |
|---|---|
| End-of-walk Borg dyspnoea | > 5: 19; 2 to 5: 3; < 2: 0 |
| Continuous oxygen flow | ≥ 3 L/min: 28; otherwise 0 |
| Distance | < 300 m: 34; 300 to 349 m: 26; 350 to 449 m: 15; ≥ 450 m: 0 |
| Lowest SpO2 | < 90%: 19; otherwise 0 |

Published reference point: a total of at least 28 points (sensitivity 85%, specificity 48% in the validation cohort); quartiles 0-18, 19-37, 38-56 and 57-100.

Several implementation choices were made where the article is silent:
- a distance of 350 m or 450 m falls into the more favourable category;
- a flow above 6 L/min scores 28 points, as in the validation cohort;
- on pulsed oxygen, the score is not computed, as there is no flow that can be converted;
- the Borg rating used is the end-of-walk rating, as the article does not state when it was taken;
- the nadir is the lowest SpO2 recorded, read every minute.

- Source: Nathan SD, et al. *Eur Respir J* 2025;66:2402565. doi:10.1183/13993003.02565-2024. The score was derived in 1,251 patients from the ISABELA 1 and 2 trials and validated in a single-centre cohort of 295 patients. The article was read in full, except for the supplement.

### SpO2 at the 1st minute

> value recorded at 1 min

In COPD, an SpO2 falling below 88% within one minute is associated with mortality: 73%, compared with 38% when desaturation occurs later and 28% without desaturation, in 319 patients followed for a mean of 5.6 years. The exact criterion is the time to 88%, which the app does not measure: the value at 1 min is only an approximation.

- Source: García-Talavera I, et al. Early desaturation during 6-minute walk test is a predictor of mortality in COPD. *Lung* 2023;201:217-24. doi:10.1007/s00408-023-00613-x. Checked in the full text.

### Mean desaturation

> resting SpO2 − mean of the minute-by-minute readings (points)

In 55 patients over 65 with heart failure, a mean desaturation of at least 6.7 points predicted rehospitalisation for heart failure or cardiovascular death at one year, and added to the information given by distance. In the study, SpO2 was recorded continuously, second by second, and the reference was the maximum SpO2 of the resting phase. The app only has the entered resting value and the reading of each minute: its calculation is only an approximation of the published index, and the 6.7 reference point does not transfer directly.

- Source: Sunayama I, et al. *Am J Physiol Heart Circ Physiol* 2024. doi:10.1152/ajpheart.00578.2024. Checked in the full text (preprint version of the article).

### Chronotropic response

> highest HR − resting HR (/min)

It is part of the DSC index proposed in interstitial lung disease (Kchaou et al., *Sarcoidosis Vasc Diffuse Lung Dis* 2025, doi:10.36141/svdld.v42i1.13949). It cannot be interpreted in patients on beta-blockers.

- Source of the reference point: Holland AE, Hill CJ, Glaspole I, et al. Impaired chronotropic response to 6-min walk test and reduced survival in interstitial lung disease. *Respir Med* 2013;107:1066-72. doi:10.1016/j.rmed.2013.04.002. In 62 patients with ILD (40 with IPF), without beta-blockers or heart failure, a chronotropic response below 20 /min predicted death at four years (odds ratio 10.7), independently of desaturation and FVC. The response is defined there as here, peak HR minus resting HR. Checked in the full text.

### Chronotropic index

> (end-test HR − resting HR) ÷ (220 − age − resting HR)

In the COPDGene cohort (4,484 current and former smokers, 1,966 of them with COPD, followed for 4.1 years), a higher index is associated with fewer severe acute respiratory events, but not with all events; the results are similar in the COPD subgroup. No threshold is published. The article's formula is the app's, with HR taken immediately after the walk.

- Source: Macdonald et al. *Respir Med* 2022. doi:10.1016/j.rmed.2022.106775. Checked in the full text.

### HR recovery at 1 minute

> end-test HR − HR recorded 1 minute after the end (/min)

The 2014 standard associates a reduced recovery with a poor prognosis in ILD and PAH, without a threshold common to all diseases.

- PAH: the best threshold to discriminate clinical worsening was 17 beats (AUC 0.70, 102 patients followed for a median of 2.4 years). Source: Rezende et al., *PLoS One* 2022. doi:10.1371/journal.pone.0268839. Checked in the full text.
- COPD (COPDGene): with HR read on the oximeter at the end of the walk and then after one minute seated, as in the app, a recovery of 10 /min or less was the optimal threshold to identify an FEV1 below 30% of predicted (AUC 0.62); it was also associated with subsequent exacerbations. Source: Zhao et al., *Int J Chron Obstruct Pulmon Dis* 2021. doi:10.2147/COPD.S311572. Checked in the full text.
- In sarcoidosis-associated pulmonary hypertension, HR recovery was not prognostic (Gupta 2022, below).

### Distance–saturation product

> distance × lowest SpO2 ÷ 100 (m·%)

The 2014 standard lists this index among the desaturation indices proposed in ILD, whose value is not confirmed. Gupta et al. report, citing other studies that were not reread here, prognostic thresholds of 200 m·% in IPF, 290 in COPD and 280 in bronchiectasis. In their registry of sarcoidosis-associated pulmonary hypertension (174 patients), the nadir was not available: they used the end-of-test SpO2, and this modified product, at a threshold of 200 m·%, was not associated with death or transplantation. As the nadir is read every minute rather than measured continuously, the product computed by the app is probably overestimated.

- Source: Gupta et al. *Respir Med* 2022. doi:10.1016/j.rmed.2022.106801. Checked in the full text.

### Six-minute walk work (6MWW)

> distance (km) × weight (kg), in kg·km

According to the 2014 standard, it correlates better than distance alone with DLCO and peak oxygen uptake, and its usefulness remains to be established. It has no reference value. The index was added at the request of the physician responsible for the app, despite the age of the source.

- Source: Chuang ML, Lin IF, Wasserman K. The body weight-walking distance product as related to lung function, anaerobic threshold and peak VO2 in COPD patients. *Respir Med* 2001;95:618-26. doi:10.1053/rmed.2001.1115. In 33 men with COPD (6 excluded for lack of a maximal exercise test), the mean distance was 456 m and the mean product 27.5 kg·km; the product correlated better than distance alone with peak VO2 and the anaerobic threshold. Checked in the full text.

### Distance per minute

> for each minute, cumulative distance at the end of the minute − cumulative distance at its start

The cumulative distance between two passages at a cone is apportioned by walking time, stops excluded, which assumes a constant pace during each length. The last minute includes the partial metres. This is the unit of pacing studies in neurology; there is no reference point in respiratory disease, and healthy subjects walk at an almost constant pace.

- Source: Dalgas et al. *J Rehabil Med* 2014. doi:10.2340/16501977-1231 (multiple sclerosis, 80 patients; earlier than 2015, kept because it is the only study that measures the distance of each minute). Checked in the full text: distance decreases after the first minute in all subgroups.

### Walking fatigability

> distance of the last minute ÷ distance of the 1st minute (%)

An index from the neurological and geriatric literature, with no accepted reference definition and no reference point in respiratory disease.

- Source: Van Geel et al. Measuring walking-related performance fatigability in clinical practice: a systematic review. *Eur J Phys Rehabil Med* 2020;56:88-103 (online in 2019). doi:10.23736/S1973-9087.19.05878-7

### Pace variability

> test split into three 2-minute epochs: (speed of the fastest epoch − speed of the slowest) ÷ mean speed of the test

Computed only on a complete 6-minute test. In COPD, a value of at least 0.39 is associated with mortality or hospitalisation at one year, in a single cohort of 163 patients.

- Source: Huang et al. *Int J Chron Obstruct Pulmon Dis* 2023. doi:10.2147/COPD.S407708

### Speed, 1st then 2nd half

> mean speed of the lengths whose midpoint falls in the 1st half of the test, then in the 2nd

Slowing at the end of the test is a research lead, with no reference value.

- Source: Lancaster (review). *Multidiscip Respir Med* 2018. doi:10.1186/s40248-018-0158-z. Checked in the full text: the review presents the speed of the first and second halves as a possible marker, without data.

## What the app does not compute

No oxygen flow is suggested or "retained", and no prescription criterion is applied (clinical choice). Indices that require a continuous SpO2 recording (time below 90%, desaturation area) are not computed, as the oximeter data are not accessible.
