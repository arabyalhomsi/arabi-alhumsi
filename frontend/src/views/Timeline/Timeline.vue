<template>
  <div>
    <div class="timeline">
      <div v-for="timelineEntry in computedTimelineEntries" v-bind:key="timelineEntry.year">
        <TimelineYear
          :date="timelineEntry.year" />


        <TimelineEntry
          v-for="mEntry in timelineEntry.entries"
          v-bind:key="mEntry.id"
          :title="mEntry.title"
          :content="mEntry.content" />
      </div>
    </div>
  </div>
</template>

<script>
import TimelineEntry from './components/TimelineEntry'
import TimelineYear from './components/TimelineYear'
import getTimelineEntries from '../../graphql/getTimelineEntries.gql'

export default {
    name: 'Timeline',
    components: {
      TimelineEntry,
      TimelineYear
    },
    computed: {
      computedTimelineEntries () {
        const timelineEntries = this.timelineEntries
        if (!timelineEntries)
          return false
        
        let entriesArr = []
        
        timelineEntries.forEach((entry, entryIndex) => {
          let year = new Date(entry.date).getFullYear()

          let newEntryObj = {
            title: entry.title,
            content: entry.content,
            id: entry.id,
            date: entry.date
          }
          
          let indexOfNewEntry = entriesArr.findIndex(ob => ob.year == year)
          if (indexOfNewEntry >= 0) {
            entriesArr[indexOfNewEntry].entries.push(newEntryObj)
          } else {
            let entries = []
            entries.push(newEntryObj)
            entriesArr.push({
              year: year,
              entries: entries
            })
          }
        })
        console.log(entriesArr)
        return entriesArr
      }
    },
    created () {
    },
    apollo: {
      timelineEntries: getTimelineEntries
    }

}
</script>

<style lang="scss" src="./Timeline.scss" scoped></style>