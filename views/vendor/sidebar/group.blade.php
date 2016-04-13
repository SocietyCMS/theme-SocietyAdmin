@if(count(array_filter($items)) > 0)
    <div class="item">
        @if($group->shouldShowHeading())
            <div class=" header">{{ $group->getName() }}</div>
        @endif

        <div class="menu">
            @foreach($items as $item)
                {!! $item !!}
            @endforeach
        </div>
    </div>
@endif