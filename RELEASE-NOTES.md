# Release notes

*English · [Français](NOTES-DE-VERSION.md)*

## 25 November 2026 — new look on iPhone

On iPhone held upright, the screens have fewer boxes: values and lists are separated by thin rules, and the texts to read (instructions to the patient, phrase during the test, summary) sit on the background with a teal bar on the left. During the test, the minute table is a real table, the timer and the time left fit on one line, the corridor is drawn at the top of the "+1 length" button, which is larger than before, and "Undo 1" is discreet. At rest and after the end, the readings (SpO2, HR, SBP, DBP) are entered in a table that works like the minute table during the test: large figures, a dot when a value is missing, the row that is due opens on its own (rest; end, then 1 and 3 min with the timer), "OK" closes it, and a row can be tapped to correct it. The values at the end are now entered in the table of the Recovery tab. The tabs of this screen are underlined. The recovery timer stops at 3 minutes (a test reopened the next day no longer shows a duration of several days). The way the app works, the iPad and landscape are unchanged.

## 23 November 2026 — titration starting on room air

A titration can start on room air, to show desaturation on air first. During the test, the "Oxygen: room air, change" button opens "Switch to oxygen", where the interface, the mode, the source and the flow or setting are chosen; later changes work as before, and undoing the first change returns to room air. The report states it ("room air at the start, then nasal cannula, continuous flow", "switch from room air to 2 L/min at 1 min 42 s"), and the O2 track of the figure starts from zero. On iPhone, the test screen of a titration now fits without the bottom buttons going under the home bar.

## 23 November 2026 — test screen

On iPhone, the test screen shows a table of the six minutes in large figures: SpO2, HR and number of lengths for each minute. The row of the current minute opens on its own, and any row can be tapped to fill it in or correct it; a minute picked by hand is no longer taken away when the minute changes. On iPad, the minute card likewise follows the timer, and all six minutes can be tapped. "Patient stops" no longer opens a panel: the button stays pressed and shows the duration of the stop, the phrase box gives the phrase to resume walking and the time left before saying it again, and the button is tapped again when the patient walks on. SpO2 and HR entered during a stop keep their time and are plotted at that moment, within the stop band, on the figure of the results and of the report; the row of the minute is marked "stop". Distance is expressed the same way everywhere: percentage of the predicted value, followed by the predicted value and the lower limit of normal (LLN).

## 22 November 2026 — unexpected situations

Fixes drawn from use scenarios outside the planned path. An implausible value (SpO2 outside 50 to 100%, HR outside 30 to 220/min, age outside 18 to 100 years, height outside 100 to 230 cm, weight outside 25 to 250 kg) is shown in red, is left out of every calculation and of the report, and appears in the "To complete" list; previously, an SpO2 typed 9 instead of 90 went into the summary as it was. The demonstration timer speed returns to ×1 with each new test and, otherwise, is shown on START and on the timer. "Fill in a sample test" asks for confirmation when a test holds data, and starts from a blank test. A forgotten length can be added after the end (counted in the distance, not in the speed); two taps less than 3 seconds apart count as a single length, and two quick taps no longer zoom the page. Once the test is over, the "Ready to start" screen offers "New test" in place of START. A finished test is kept until the next "New test", beyond 12 hours. During the first 30 seconds, "False start" resets the timer without erasing the patient or the rest values. On returning from sleep or a phone call, a single beep sounds for the missed phrases.

## 22 November 2026 — app in English

The app is available in English as well as in French. It follows the language of the device, and a "Language" setting chooses between automatic, French and English. In English, the instructions, the encouragement and the Borg scale are those of the original standards: instructions and encouragement from the ERS/ATS standard of 2014 (tables 5 and 6), modified Borg scale from the ATS statement of 2002 (table 2), and the post-test question of the same statement. The summaries and the Word report are written in the language of the app; in English, the Word file is named with the English abbreviation, for example 6MWT_2026-11-22_10-18.docx, and the time in the mail subject is written 10:18. In English, the app is called 6MWT, the English abbreviation of the six-minute walk test; on a device in English, the home screen icon and its name read 6MWT. The tutorial, the installation notice and the example report are available in English.

Two layout fixes during an oxygen titration with pulsed oxygen: on iPhone in landscape, the Conditions screen no longer goes beyond the screen height and the oxygen source is shown in full; on iPad in landscape, the Test screen fits as well, down to the field for the nadir read on the oximeter, which went under the bottom of the screen.

## 22 November 2026 — documentation in English

The repository pages (README, calculation methods, release notes) are now in English, with a French version linked at the top of each page.

## 22 November 2026 — fixes

The reminder of the baseline Borg rating no longer shows duplicated parentheses. On iPhone, the step bar stays visible below the clock when scrolling through the results. In the settings, choosing an option no longer scrolls the sheet back to the top.

## 22 November 2026 — start halfway along the corridor

The patient can start somewhere other than at a cone, for example from a room halfway along the corridor. A setting gives the distance between the starting line and the first cone reached: the first length counts this distance, the following ones the corridor length, and the corridor drawing shows the starting line. The report mentions the start, so that the test can be repeated on the same course, as required by the ERS/ATS standard of 2014.

## 22 November 2026 — web version

The app is now published as an installable web app: it opens from Safari or Chrome, can be added to the home screen and works offline after the first launch. It no longer needs to be signed or reinstalled every week. Outside the original iOS app, the screen stays on during the test through the browser's screen wake lock, beeps use a playback audio session, and the report is passed to the system share sheet.

## 13 October 2026

The SpO2 threshold setting is removed, from the app and from the report. Without a resting SpO2, the report states that desaturation could not be calculated instead of concluding that there was none; measurements taken during stops are plotted on the figure. The start of the workflow is lighter: no more "incomplete" marks on the steps, predicted distance shown only once it can be calculated, test conditions entered through drop-down lists. The exploratory indices of the results appear in the report, as a summary table, with their sources in the methods box.

## 12 October 2026

Compliance with the ERS/ATS technical standard of 2014: 15 minutes of rest, standardised instructions and encouragement, management of stops, alert for SpO2 below 80%, constant oxygen flow during a walk test. The nadir is the lowest SpO2 recorded during the test, stops included, excluding the resting value, in the results as in the report. Additions: Word report and sending, saving and restoring the test in progress, oxygen titration (steps at rest, time-stamped changes during the walk and during stops), stored pulsed oxygen devices, ODDS score for idiopathic pulmonary fibrosis, layout for iPhone in portrait and landscape.

## 11 October 2026 — guided workflow

Complete redesign of the interface as a seven-step guided workflow for the department's iPad: return to any step at any time, timer that starts only at the start, corridor drawing, full-screen Borg scale facing the patient, timed recovery, results with figure, standard values and sourced exploratory indices.

## 4 October 2026

First version used in the department on iPhone: counting of lengths, minute-by-minute readings, Word report with figure, sending by email, oxygen titration.
